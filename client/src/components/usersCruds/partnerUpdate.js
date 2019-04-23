// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {updatePartner} from '../../actions/usersActionsFolder/usersActions';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

//requiring axios
//const axios = require('axios');



//class 3ady ya3ni 
class partnerForm extends Component {

  //contructor with the attribute of the crud you want
   constructor(props){
    super(props)
    this.state = {
      birthDate:'',
      gender: '',
      address:'',
      phoneNumber:'',
      typeOfUser:'Partner',
      companyName: '',
      companyLocation: '',
      field:'',
      projects: 
          {
              name: '',
              startDate: '',
              endDate: '',
          },

     
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

      birthDate:this.state.birthDate,
      gender: this.state.gender,
      address:this.state.address,
      phoneNumber:this.state.phoneNumber, 
      companyName: this.state.companyName,
      companyLocation: this.state.companyLocation,
      field:this.state.field,
      projects: 
          {
              name: this.state.name,
              startDate: this.state.startDate,
              endDate: this.state.endDate,
          }
        }
   //send an axios request
   this.props.updatePartner(body)


   //reset the inputs to empty 
   this.setState({
    birthDate:'',
    gender: '',
    address:'',
    phoneNumber:'',
    typeOfUser:'Partner',
    companyName: '',
      companyLocation: '',
      field:'',
      projects: 
          {
              name: '',
              startDate: '',
              endDate: '',
          },
    })
  }
  
  //the life cycle method you need
  render() {
    return (
     <Form onSubmit={this.onSubmit}>
     <Form.Row>
     <Col>
     <Form.Group as={Col} >
    <Form.Label ></Form.Label>
    </Form.Group>
    </Col>
    </Form.Row>
    <Form.Row>
        <Col>
  <Form.Group as={Col} controlId="formAddress">
      <Form.Label >Address</Form.Label>
      <Form.Control placeholder = "Address" type ="text" name="address" onChange = {this.onChange} value={this.state.address}/>
    </Form.Group>
    </Col>
  <Form.Row>
  <Col>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Birth Date</Form.Label>
      <Form.Control placeholder = "eg.DD-MM-YYYY" type ="text" name="birthDate" onChange = {this.onChange} value={this.state.birthDate} />
    </Form.Group>
    </Col>
    </Form.Row>
    <Col>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Gender</Form.Label>
      <Form.Control placeholder = "eg.male or female" type ="text" name="gender" onChange = {this.onChange} value={this.state.gender} />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control placeholder = "eg.+201*" type ="text" name="phoneNumber" onChange = {this.onChange} value={this.state.phoneNumber} />
    </Form.Group>
    </Col>
  </Form.Row>
  <Form.Row> 
  <Col>
  <Form.Group as={Col} controlId="formCompanyName">
      <Form.Label >Company Name</Form.Label>
      <Form.Control placeholder = "Company Name" type ="text" name="companyName" onChange = {this.onChange} value={this.state.companyName}/>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formCompanyLocation">
      <Form.Label >Company Location</Form.Label>
      <Form.Control placeholder = "Company Location" type ="text" name="companyLocation" onChange = {this.onChange} value={this.state.companyLocation}/>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formField">
      <Form.Label >Field</Form.Label>
      <Form.Control placeholder = "Field" type ="text" name="field" onChange = {this.onChange} value={this.state.field}/>
    </Form.Group>
    </Col>
    </Form.Row> 
    <Form.Row>
     <Col>
     <Form.Group as={Col} >
    <Form.Label >Projects</Form.Label>
    </Form.Group>
    </Col>
    </Form.Row>
    <Form.Row> 
    <Col>   
    <Form.Group as={Col} controlId="formName">
      <Form.Label >Name</Form.Label>
      <Form.Control placeholder = "Name" type ="text" name="name" onChange = {this.onChange} value={this.state.projects.name}/>
    </Form.Group>
    </Col>
    <Col>   
    <Form.Group as={Col} controlId="formStartTime">
      <Form.Label>Start Time</Form.Label>
      <Form.Control placeholder = "eg.HH-mm" type ="text" name="startTime" onChange = {this.onChange} value={this.state.projects.startTime} />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formEndTime">
      <Form.Label>End Time</Form.Label>
      <Form.Control placeholder = "eg.HH-mm" type ="text" name="endTime" onChange = {this.onChange} value={this.state.projects.endTime} />
    </Form.Group>
    </Col>
    </Form.Row>
      
    <Form.Row>
    <Col>
    <Form.Group as={Col}>
  <Button color="primary" className="float-right" type="submit" >
    Update Profile
  </Button>
  </Form.Group>
  </Col>
  </Form.Row>
</Form>
    
    )
  }
}


partnerForm.propTypes ={
    updatePartner: PropTypes.func.isRequired
};



//exports the component to god knows where
export default connect(null,{updatePartner})(partnerForm);
