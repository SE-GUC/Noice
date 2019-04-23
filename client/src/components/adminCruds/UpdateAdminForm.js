// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {updateAdmin} from '../../actions/adminActionsFolder/adminActions';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
//requiring axios
const axios = require('axios');



//class 3ady ya3ni 
class UpdateAdminForm extends Component {
  //contructor with the attribute of the crud you want
   constructor(props){
    super(props)
    this.state = {
      firstName:'',
      middleName:'',
      lastName:'',
      age:'',
      education:''
    };
    //bind the methods with the entity
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //on change set the state with the target value from any event(e)
   onChange(e){
     this.setState({[e.target.name]: e.target.value});
   }
   //what happens when you click the submit button
   async onSubmit(e){
   //prevents submitting empty values
    e.preventDefault();
   //the body you will send
    const body={
    firstName:this.state.firstName,
      middleName:this.state.middleName ,
      lastName:this.state.lastName,
      age:this.state.age,
      education:this.state.education
   }
   const params= {
       id:this.state.id
   }
   //send an axios request
   this.props.updateAdmin(body,params)


   //reset the inputs to empty 
   this.setState({
     firstName:' ',
     middleName:' ',
     lastName:' ',
     age:'',
     education:'',
     id:'',
             })
  }
  
  //the life cycle method you need
  render() {
    return (
      <div>
     <Form onSubmit={this.onSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" onChange ={this.onChange} placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control placeholder="Password" onChange ={this.onChange} />
    </Form.Group>
    
    </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="id">
      <Form.Label>ID</Form.Label>
      <Form.Control placeholder="id"  type ="text" name="id" onChange = {this.onChange} value={this.state.id}/>
    </Form.Group>


  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="first name"  type ="text" name="firstName" onChange = {this.onChange} value={this.state.firstName}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formMiddleName">
      <Form.Label>middle Name</Form.Label>
      <Form.Control placeholder ="middle name" type ="text" name="middleName" onChange = {this.onChange} value={this.state.middleName}>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formLastName">
      <Form.Label>last name</Form.Label>
      <Form.Control placeholder ="last name" type ="text" name="lastName" onChange = {this.onChange} value={this.state.lastName}/>
    </Form.Group>
  </Form.Row>
  <Form.Group as={Col} controlId="formGridAge">
      <Form.Label>Age</Form.Label>
      <Form.Control placeholder = "age" type ="number" name="age" onChange = {this.onChange} value={this.state.age}/>
    </Form.Group>
  
  <Button variant="primary" type="submit">
    Update admin
  </Button>
</Form>;
      </div>
    )
  }
}

UpdateAdminForm.propTypes ={
  updateAdmin: PropTypes.func.isRequired
};



//exports the component to god knows where
export default connect(null,{updateAdmin})(UpdateAdminForm);
