// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {updateLocation} from '../../actions/usersActionsFolder/usersActions';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';




//class 3ady ya3ni 
class locationForm extends Component {

  //contructor with the attribute of the crud you want
   constructor(props){
    super(props)
    this.state = {
      birthDate:'',
      gender: '',
      address:'',
      phoneNumber:'',
      typeOfUser:'Co-working Space',
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
   this.props.updateLocation(body)


   //reset the inputs to empty 
   this.setState({
    birthDate:'',
    gender: '',
    address:'',
    phoneNumber:'',
    typeOfUser:'Co-working Space',
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
  <Form.Group as={Col} controlId="formNameofPlace">
      <Form.Label >Name Of Place</Form.Label>
      <Form.Control placeholder = "Date" type ="text" name="date" onChange = {this.onChange} value={this.state.date}/>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formDate">
      <Form.Label >Date</Form.Label>
      <Form.Control placeholder = "Interests" type ="text" name="interests" onChange = {this.onChange} value={this.state.interests}/>
    </Form.Group>
    </Col>
    </Form.Row> 
    <Form.Row>
     <Col>
     <Form.Group as={Col} >
    <Form.Label >Working Departments</Form.Label>
    </Form.Group>
    </Col>
    </Form.Row>
    <Form.Group as={Col} controlId="formNameofDepartment">
      <Form.Label >Name Of Department</Form.Label>
      <Form.Control placeholder = "Name Of Department" type ="text" name="NameofDepartment" onChange = {this.onChange} value={this.state.workingPlaceDepartments.nameOfDepartments}/>
    </Form.Group>
    <Form.Row> 
    <Col>
    <Form.Group as={Col} controlId="formCity">
      <Form.Label >City</Form.Label>
      <Form.Control placeholder = "City" type ="text" name="city" onChange = {this.onChange} value={this.state.workingPlaceDepartments.City}/>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formRegion">
      <Form.Label >Region</Form.Label>
      <Form.Control placeholder = "Region" type ="text" name="region" onChange = {this.onChange} value={this.state.workingPlaceDepartments.Region}/>
    </Form.Group>
    </Col>
    </Form.Row> 
    <Form.Row> 
    <Col>   
    <Form.Group as={Col} controlId="formStartTime">
      <Form.Label>Start Time</Form.Label>
      <Form.Control placeholder = "eg.HH-mm" type ="text" name="startTime" onChange = {this.onChange} value={this.state.workingPlaceDepartments.startTime} />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formEndTime">
      <Form.Label>End Time</Form.Label>
      <Form.Control placeholder = "eg.HH-mm" type ="text" name="endTime" onChange = {this.onChange} value={this.state.workingPlaceDepartments.endTime} />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Col} controlId="formRate">
      <Form.Label>Rate</Form.Label>
      <Form.Control placeholder = "rate" type ="number" name="rate" onChange = {this.onChange} value={this.state.workingPlaceDepartments.rate} />
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


locationForm.propTypes ={
    updateLocation: PropTypes.func.isRequired
};



//exports the component to god knows where
export default connect(null,{updateLocation})(locationForm);
