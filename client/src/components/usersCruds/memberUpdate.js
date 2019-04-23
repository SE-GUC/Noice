// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {updateMember} from '../../actions/usersActionsFolder/usersActions';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

//requiring axios
//const axios = require('axios');



//class 3ady ya3ni 
class memberForm extends Component {

  //contructor with the attribute of the crud you want
   constructor(props){
    super(props)
    this.state = {
      birthDate:'',
      gender: '',
      address:'',
      phoneNumber:'',
      typeOfUser:'Member',
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
      certificatesHeld: ''
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
   }
   //send an axios request
   this.props.updateMember(body)


   //reset the inputs to empty 
   this.setState({
    birthDate:'',
    gender: '',
    address:'',
    phoneNumber:'',
    typeOfUser:'Member',
    
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


memberForm.propTypes ={
    updateMember: PropTypes.func.isRequired
};



//exports the component to god knows where
export default connect(null,{updateMember})(memberForm);
