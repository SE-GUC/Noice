// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {signUp} from '../../actions/usersActionsFolder/usersActions';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//requiring axios
//const axios = require('axios');



//class 3ady ya3ni 
class CreateUsersForm extends Component {

  //contructor with the attribute of the crud you want
   constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      firstName:'',
      middleName:'',
      lastName:'',
      birthDate:'',
      gender: '',
      address:'',
      phoneNumber:'',
      typeOfUser:'',
      companyName: '',
      companyLocation: '',
      field:'',
      partners: 
          {
              id: '',
          },
      events:
          {
              id: '',
              name: '',
              startDate: '',
              endDate: '',
          },
    
      projects: 
          {
              id: '',
              name: '',
              startDate: '',
              endDate: '',
          },
      vacancies: 
          {
              id: '',
          },
      skills: '',
      interests: '',
      pastEvents: 
          {
              name:'',
              startDate: '',
              endDate: '',
          },
      projectsCompleted:'',
      reviewsReceived:'',
      certificatesHeld: '',
      NameOfPlace: '',
      date:'',
      workingPlaceDepartments: {
          nameOfDepartments: '',
          City: '',
          Region: '',
          startTime: '',
          endTime: '',
          rate: -1,
    
  } ,
  };
    //bind the methods with the entity
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
    this._onButtonClick1= this._onButtonClick1.bind(this);
    this._onButtonClick2 = this._onButtonClick2.bind(this);
  }
  //on change set the state with the target value from any event(e)
   onChange(e){
     this.setState({[e.target.name]: e.target.value});
   }
   _onButtonClick() {
     
    this.setState({
      typeOfUser:"Member",
      showComponent: true,
    });
  }
  _onButtonClick1() {
  
    this.setState({
      typeOfUser:"Partner",
      showComponent1: true,
    });
  }
  _onButtonClick2() {

    this.setState({
      typeOfUser:"Co-working Space Owner",
      showComponent2: true,
    });
  
  }
  renderLocation = () => {
  
    return (
      <Form onSubmit={this.onSubmit}>
  <Form.Group as={Col} controlId="formNameofPlace">
      <Form.Label >Name Of Place</Form.Label>
      <Form.Control placeholder = "Name of Place" type="text" ref="searchStringInput" onChange = {this.onChange} value={this.state.NameOfPlace}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formInterests">
      <Form.Label >Interests</Form.Label>
      <Form.Control placeholder = "Interests" type ="text" name="interests" onChange = {this.onChange} value={this.state.interests}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formProjectsCompleted">
      <Form.Label >Projects Completed</Form.Label>
      <Form.Control placeholder = "Projects Completed" type ="text" name="projectsCompleted" onChange = {this.onChange} value={this.state.projectsCompleted}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formReviewsReceived">
      <Form.Label >Reviews Received</Form.Label>
      <Form.Control placeholder = "Reviews Received" type ="text" name="reviewsReceived" onChange = {this.onChange} value={this.state.reviewsReceived}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formcertificatesHeld">
      <Form.Label >Certificates Held</Form.Label>
      <Form.Control placeholder = "Certificates Held" type ="text" name="certificatesHeld" onChange = {this.onChange} value={this.state.certificatesHeld}/>
    </Form.Group>
    
  
  
    

   </Form>
      
    )
  }
  renderPartner = () => {
  }
   renderMember = () => {
  
    return (
      <Form onSubmit={this.onSubmit}>
  <Form.Group as={Col} controlId="formSkills">
      <Form.Label >Skills</Form.Label>
      <Form.Control placeholder = "Skills" type ="text" name="skills" onChange = {this.onChange} value={this.state.skills}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formInterests">
      <Form.Label >Interests</Form.Label>
      <Form.Control placeholder = "Interests" type ="text" name="interests" onChange = {this.onChange} value={this.state.interests}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formProjectsCompleted">
      <Form.Label >Projects Completed</Form.Label>
      <Form.Control placeholder = "Projects Completed" type ="text" name="projectsCompleted" onChange = {this.onChange} value={this.state.projectsCompleted}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formReviewsReceived">
      <Form.Label >Reviews Received</Form.Label>
      <Form.Control placeholder = "Reviews Received" type ="text" name="reviewsReceived" onChange = {this.onChange} value={this.state.reviewsReceived}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formcertificatesHeld">
      <Form.Label >Certificates Held</Form.Label>
      <Form.Control placeholder = "Certificates Held" type ="text" name="certificatesHeld" onChange = {this.onChange} value={this.state.certificatesHeld}/>
    </Form.Group>
   </Form>
      
    )
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
      middleName:this.state.middleName,
      lastName:this.state.lastName,
      birthDate:this.state.birthDate,
      gender: this.state.gender,
      address:this.state.address,
      phoneNumber:this.state.phoneNumber,
      typeOfUser:this.state.typeOfUser,
      companyName: this.state.companyName,
      companyLocation: this.state.companyLocation,
      field:this.state.field,
      partners: 
          {
              id: this.state.id,
          },
      events:
          {
              id: this.state.id,
              name: this.state.name,
              startDate: this.state.startDate,
              endDate: this.state.endDate,
          },
    
      projects: 
          {
              id: this.state.id,
              name: this.state.name,
              startDate: this.state.startDate,
              endDate: this.state.endDate,
          },
      vacancies: 
          {
              id: this.state.id,
          },
      skills: this.state.skills,
      interests: this.state.interests,
      pastEvents: 
          {
              id:this.state.id,
              name:this.state.name,
              startDate: this.state.startDate,
              endDate: this.state.endDate,
          },
      projectsCompleted:this.state.projectsCompleted,
      reviewsReceived:this.state.reviewsReceived,
      certificatesHeld: this.state.certificatesHeld,
      NameOfPlace: this.state.NameOfPlace,
      date:this.state.date,
      workingPlaceDepartments: {
          nameOfDepartments: this.state.nameOfDepartments,
          City: this.state.City,
          Region: this.state.Region,
          startTime: this.state.startTime,
          endTime: this.state.endTime,
          rate: this.state.rate,
    
  } 
   }
   //send an axios request
   this.props.createUsers(body)


   //reset the inputs to empty 
   this.setState({
    email:'',
    password:'',
    firstName:'',
    middleName:'',
    lastName:'',
    birthDate:'',
    gender: '',
    address:'',
    phoneNumber:'',
    typeOfUser:'',
    companyName: '',
    companyLocation: '',
    field:'',
    partners: 
        {
            id: '',
        },
    events:
        {
            id: '',
            name: '',
            startDate: '',
            endDate: '',
        },
  
    projects: 
        {
            id: '',
            name: '',
            startDate: '',
            endDate: '',
        },
    vacancies: 
        {
            id: '',
        },
    skills: '',
    interests: '',
    pastEvents: 
        {
            id:'',
            name:'',
            startDate: '',
            endDate: '',
        },
    projectsCompleted:'',
    reviewsReceived:'',
    certificatesHeld: '',
    NameOfPlace: '',
    date:'',
    workingPlaceDepartments: {
        nameOfDepartments: '',
        City: '',
        Region: '',
        startTime: '',
        endTime: '',
        rate: -1,
  
} 
             })
  }
  
  //the life cycle method you need
  render() {
    return (
      
        
     <Form onSubmit={this.onSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label > Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange ={this.onChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange ={this.onChange}/>
    </Form.Group>
  </Form.Row>
  <Form.Row>

    <Form.Group as={Col} controlId="formFirstName">
      <Form.Label >First Name</Form.Label>
      <Form.Control  placeholder="first name"  type ="text" name="firstName" onChange = {this.onChange} value={this.state.firstName}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formMiddleName">
      <Form.Label >Middle Name</Form.Label>
      <Form.Control placeholder ="middle name" type ="text" name="middleName" onChange = {this.onChange} value={this.state.middleName}>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formLastName">
      <Form.Label >Last Name</Form.Label>
      <Form.Control placeholder ="last name" type ="text" name="lastName" onChange = {this.onChange} value={this.state.lastName}/>
    </Form.Group>
  </Form.Row>
  
  <Form.Group as={Col} controlId="formAddress">
      <Form.Label >Address</Form.Label>
      <Form.Control placeholder = "Address" type ="text" name="address" onChange = {this.onChange} value={this.state.address}/>
    </Form.Group>
    
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Birth Date</Form.Label>
      <Form.Control placeholder = "eg.DD-MM-YYYY" type ="text" name="birthDate" onChange = {this.onChange} value={this.state.birthDate} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Gender</Form.Label>
      <Form.Control placeholder = "eg.male or female" type ="text" name="gender" onChange = {this.onChange} value={this.state.gender} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control placeholder = "eg.+201*" type ="text" name="phoneNumber" onChange = {this.onChange} value={this.state.phoneNumber} />
    </Form.Group>
  </Form.Row>

    <DropdownButton id="dropdown-item-button" title="Type of User">
  <Dropdown.Item  onClick={this._onButtonClick}  as="button">Member</Dropdown.Item>
  <Dropdown.Item onClick={this._onButtonClick1} as="button">Partner</Dropdown.Item>
  <Dropdown.Item onClick={this._onButtonClick2} as="button">Co-working Space Owner</Dropdown.Item>
</DropdownButton>
<Form.Label > </Form.Label>
<Form.Group>
{this.state.showComponent ?  this.renderMember() :null}
{this.state.showComponent1 ?  this.renderPartner() :null}
{this.state.showComponent2?  this.renderLocation() :null}
</Form.Group>
  
  <Button color="primary" className="float-right" type="submit" >
    Create User
  </Button>
</Form>
    
    )
  }
}


CreateUsersForm.propTypes ={
  createUsers: PropTypes.func.isRequired
};



//exports the component to god knows where
export default connect(null,{createUsers})(CreateUsersForm);
