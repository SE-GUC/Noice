import React, {Component} from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {searchEvent} from '../../actions/filterActionFolder/filterActions';

import Select from 'react-select'

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

/******     PLEASE READ:  ***********/
// This will work if events are on this branch (at the time of writing this it isnt)
// If the events are not on this branch, this will still work if you run the events backend from
// another branch with port 5000
class EventSearch extends Component {

    constructor(props) {
        super(props);

        this.onChangeAttribute = this.onChangeAttribute.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    /******CHANGE INITIAL ATTRIBUTES HERE ************/
        this.state = { 
            attribute: '',
            value: '',
            foundEvents: []
        }
    }

    onChangeAttribute(e) {
        this.setState({
            attribute: e.value
        });
        // console.log("Selected: " + this.state.attribute)
    }

    onChangeValue(e) {
        this.setState({
            value: e.target.value
        });
        // console.log("Value typed: " + this.state.value + ", For attribute: " + this.state.attribute)
    }

    
    onSubmit(e) { // CHANGE THIS
        e.preventDefault();
        // console.log("You pressed submit")
        if (this.state.attribute === '') return;
        const body = {
            attribute : this.state.attribute,
            value : this.state.value
        }

        this.props.searchEvent(body)

        this.setState({
            // attribute: '',
            // value: '',
            foundEvents: []
        })

    }

    render() {
        return (
            <div style = {{textAlign: 'center'}}>
                <h3>Filter Events</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Filter by: </label>
                     <Select options={ options } onChange= {(value) => {this.onChangeAttribute(value)}}/>
                    </div>


                    <div className="form-group">
                        <label>Enter value: </label>
                        <input  type="text" className="form-control" value={this.state.ID} onChange={this.onChangeValue} />
                    </div>
                    
                        <br/>

                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>
                
                {this.props.events.map(foundEvent =>{
                
                return(
                    <div>
                        <Card  border="primary" style={{ width: '24rem', margin: 'auto', textAlign: 'left' }}>
                        <Card.Header><Card.Title>Name: {foundEvent.Name}</Card.Title></Card.Header>
                        <Card.Body>
                    <strong>Owner:</strong><pre> {foundEvent.Owner}</pre>
                    <strong>Type: </strong><pre>{foundEvent.Type}</pre>
                    <strong>Location: </strong><pre>{foundEvent.Location}</pre>
                    <strong>Participants: </strong><pre>{foundEvent.Participants}</pre>
                    <strong>Start Date: </strong><pre>{JSON.stringify(foundEvent.startDate)}</pre>
                    <strong>End Date: </strong><pre>{JSON.stringify(foundEvent.endDate)}</pre>
                    <strong>Tags: </strong><pre>{JSON.stringify(foundEvent.tags)}</pre>
                    <strong>Description: </strong><pre>{foundEvent.Description}</pre>
                    <strong>Joined Members: </strong><pre>{JSON.stringify(foundEvent.joinedMembers)}</pre>
                    </Card.Body>
                        </Card>
                    <hr />
                    </div>
                )})}
                
                
                
            </div> 

        ) // rendering ends here
    }

}


const options = [
    { label: "Name", value: "Name" },
    { label: "Owner", value: "Owner" },
    { label: "Type", value: "Type" },
    { label: "Location", value: "Location" },
    { label: "Participants", value: "Participants" },
    { label: "Start Date", value: "startDate" },
    { label: "End Date", value: "endDate" },
    { label: "Tags", value: "tags" },
  ]


  EventSearch.propTypes ={
    searchEvent: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired
  };

  const mapStateToProps = state =>({
    events: state.event.events
  })

  export default connect(mapStateToProps,{searchEvent})(EventSearch);