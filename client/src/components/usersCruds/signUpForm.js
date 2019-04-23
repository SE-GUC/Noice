// importing react and connect
import Home from '../../components/Home'
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {signUp} from '../../actions/usersActionsFolder/usersActions';
import {Switch,Route} from 'react-router-dom'
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//requiring axios
const axios = require('axios');



//class 3ady ya3ni 
class signUpForm extends Component {
  //contructor with the attribute of the crud you want
   constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      firstName:'',
      middleName:'',
      lastName:'',
      typeOfUser:'',
      
    };
    //bind the methods with the entity
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
    this._onButtonClick1= this._onButtonClick1.bind(this);
    this._onButtonClick2 = this._onButtonClick2.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }
  _onButtonClick() {
     
    this.setState({
      typeOfUser:"Member"
    });
  }
  _onButtonClick1() {
  
    this.setState({
      typeOfUser:"Partner"
    });
  }
  _onButtonClick2() {

    this.setState({
      typeOfUser:"Co-working Space Owner"
    });
  }
  //on change set the state with the target value from any event(e)
   onChange(e){
     this.setState({[e.target.name]: e.target.value});
   }
   routeChange() {
     if(this.state.typeOfUser ==='Member'){
    let path = `/member`;
    this.props.history.push(path);
     }
     if(this.state.typeOfUser ==='Partner'){
      let path = `/partner`;
      this.props.history.push(path);
       }
       if(this.state.typeOfUser ==='Co-working Space Owner'){
        let path = `/location`;
        this.props.history.push(path);
         }
  }
   //what happens when you click the submit button
   async onSubmit(e){
   //prevents submitting empty values
    e.preventDefault();
   //the body you will send
    const body={
      email:this.state.email,
      password:this.state.password,
      firstName:this.state.firstName,
      middleName:this.state.middleName ,
      lastName:this.state.lastName,
      
   }
   //send an axios request
   this.props.signUp(body)
   
   //reset the inputs to empty 
   this.setState({
     email:' ',
     password:' ',
     firstName:' ',
     middleName:' ',
     lastName:' ',
     
    })
  }
  
  //the life cycle method you need
  render() {
    return (
      <div>
      
     <Form onSubmit={this.onSubmit}>
    <Form.Row>
    <Col>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" onChange ={this.onChange}  value={this.state.email} />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Password</Form.Label>
      <Form.Control type="password"  placeholder="Password" name="password" onChange ={this.onChange} value={this.state.password}/>
    </Form.Group>
    </Col>
  </Form.Row>
  <Form.Row>
  <Col>
    <Form.Group as={Col} controlId="formFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="first name"  type ="text" name="firstName" onChange = {this.onChange} value={this.state.firstName}/>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formMiddleName">
      <Form.Label>Middle Name</Form.Label>
      <Form.Control placeholder ="middle name" type ="text" name="middleName" onChange = {this.onChange} value={this.state.middleName}>
      </Form.Control>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder ="last name" type ="text" name="lastName" onChange = {this.onChange} value={this.state.lastName}/>
    </Form.Group>
    </Col>
  </Form.Row>
  <Form.Row>
  <Col> 
  <DropdownButton id="dropdown-item-button" title="Type of User">
  <Dropdown.Item  onClick={this._onButtonClick}  as="button">Member</Dropdown.Item>
  <Dropdown.Item onClick={this._onButtonClick1} as="button">Partner</Dropdown.Item>
  <Dropdown.Item onClick={this._onButtonClick2} as="button">Co-working Space Owner</Dropdown.Item>
</DropdownButton>
</Col> 
</Form.Row>
<Form.Row>
<Form.Label></Form.Label>
</Form.Row>
<Form.Row>
 <Col> 
  <Button variant="primary" type="submit" onClick={this.onSubmit} >
    Create Account
  </Button>
  </Col> 
  </Form.Row>
</Form>
      </div>
    )
  }
}

signUpForm.propTypes ={
  signUp: PropTypes.func.isRequired
};



//exports the component to god knows where
export default connect(null,{signUp})(signUpForm);
