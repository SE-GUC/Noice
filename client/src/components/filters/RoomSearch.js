import React, {Component} from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {searchRoom} from '../../actions/filterActionFolder/filterActions';

import Select from 'react-select'

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class RoomSearch extends Component {

    constructor(props) {
        super(props);

        this.onChangeAttribute = this.onChangeAttribute.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    /******CHANGE INITIAL ATTRIBUTES HERE ************/
        this.state = { 
            attribute: '',
            value: '',
            foundRooms: []
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

        this.props.searchRoom(body)

        this.setState({
            // attribute: '',
            // value: '',
            foundRooms: []
        })

    }

    render() {
        return (
            <div style = {{textAlign: 'center'}}>
                <h3>Filter Rooms</h3>
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
                
                {this.props.rooms.map(foundRoom =>{
                
                return(
                    <div>
                        <Card  border="primary" style={{ width: '24rem', margin: 'auto', textAlign: 'left' }}>
                        <Card.Header><Card.Title>ID:{foundRoom._id}</Card.Title></Card.Header>
                        <Card.Body>
                    <strong>Capacity: </strong> <pre>{foundRoom.capacity}</pre>
                    <strong>Is Available: </strong> <pre>{JSON.stringify(foundRoom.isAvailable)}</pre>
                    <strong>Location ID: </strong> <pre>{foundRoom.locationId}</pre>
                    <strong>Reservations: </strong> <pre>{JSON.stringify(foundRoom.reservations, null, 4)}</pre>
                    <strong>Tags: </strong> <pre>{JSON.stringify(foundRoom.tags)}</pre>
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
    { label: "Capacity", value: "capacity" },
    { label: "Is Available", value: "isAvailable" },
    { label: "Location ID", value: "locationId" },
    { label: "Tags", value: "tags" }
  ]


  RoomSearch.propTypes ={
    searchRoom: PropTypes.func.isRequired,
    rooms: PropTypes.array.isRequired
  };

  const mapStateToProps = state =>({
    rooms: state.room.rooms
  })

  export default connect(mapStateToProps,{searchRoom})(RoomSearch);