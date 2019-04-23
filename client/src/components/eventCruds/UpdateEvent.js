// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {updateEvent} from '../../actions/eventActionsFolder/EventActions';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
//requiring axios
//const axios = require('axios');



//class 3ady ya3ni 
class UpdateEvent extends Component {
  //contructor with the attribute of the crud you want
   constructor(props){
    super(props)
    this.state = {
      ID:'',
      Name:'',
      Owner:'',
      Type:'',
      Location:'',
      StartDate:'',
      Description:'',
      tags:''
    };
    //bind the methods with the entity
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //on change set the state with the target value from any event(e)
   onChange(e){
     this.setState({
        ID:e.target.value,
        Name:e.target.value,
        Owner:e.target.value,
        Type:e.target.value,
        Location:e.target.value,
        StartDate:e.target.value,
        Description:e.target.value,
        tags:e.target.value
        });
   }
   //what happens when you click the submit button
   async onSubmit(e){
   //prevents submitting empty values
    e.preventDefault();
   //the body you will send
    const ID= this.state.ID
    console.log(ID)
    

    const body={
        
        Name:this.state.Name,
        Owner:this.state.Owner ,
        Type:this.state.Type,
        Location:this.state.Location,
        startDate:this.state.StartDate,
        Description:this.state.Description,
        tags:[this.state.tags]
   }
   //send an axios request
   this.props.updateEvent(ID,body)


   //reset the inputs to empty 
   this.setState({
    ID:'',
    Name:'',
    Owner:'',
    Type:'',
    Location:'',
    StartDate:'',
    Description:'',
    tags:''   
    })
  }
  
   //the life cycle method you need
   render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Row>
          <Form.Group as={Col} controlId="formGridID">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                value={this.state.ID}
                onChange={e => this.setState({ID: e.target.value})}
                placeholder="Enter Event ID"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={this.state.Name}
                onChange={e => this.setState({Name: e.target.value})}
                placeholder="Enter Event Name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridOwner">
              <Form.Label>Owner</Form.Label>
              <Form.Control
                type="text"
                placeholder="Owner"
                value={this.state.Owner}
                onChange={e => this.setState({Owner: e.target.value})}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                placeholder="Type"
                type="text"
                name="Type"
                value={this.state.Type}
                onChange={e => this.setState({Type: e.target.value})}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                placeholder="Location"
                type="text"
                name="Location"
                value={this.state.Location}
                onChange={e => this.setState({Location: e.target.value})}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formStartDate">
              <Form.Label>StartDate</Form.Label>
              <Form.Control
                placeholder="StartDate"
                type="text"
                name="StartDate"
                value={this.state.StartDate}
                onChange={e => this.setState({StartDate: e.target.value})}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Description"
                type="text"
                name="Descrition"
                value={this.state.Description}
                onChange={e => this.setState({Description: e.target.value})}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group as={Col} controlId="formtags">
            <Form.Label>tags</Form.Label>
            <Form.Control
              placeholder="tags"
              type="text"
              name="tags"
              value={this.state.tags}
              onChange={e => this.setState({tags: e.target.value})}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Event
          </Button>
        </Form>
      </div>
    );
  }
}

UpdateEvent.propTypes ={
  updateEvent: PropTypes.func.isRequired
};



//exports the component to god knows where
export default connect(null,{updateEvent})(UpdateEvent);
