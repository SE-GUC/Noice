// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {createVacancy} from '../../actions/VacancyActions/VacancyActions';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
//requiring axios
//const axios = require('axios');



//class 3ady ya3ni 
class CreateVacancyComponent extends Component {
  //contructor with the attribute of the crud you want
   constructor(props){
    super(props)
    this.state = {
      careerLevel:'',
      jobDescription:'',
      educationLevel:'',
      time:'',
      skillsRequired:'',
      tags:''
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
    careerLevel:this.state.careerLevel,
    jobDescription:this.state.jobDescription,
    educationLevel:this.state.educationLevel,
    time:this.state.time,
    skillsRequired:this.state.skillsRequired,
    tags:this.state.tags
   }
   //send an axios request
   this.props.CreateVacancy(body)


   //reset the inputs to empty 
   this.setState({
    careerLevel:'',
    jobDescription:'',
    educationLevel:'',
    time:'',
    skillsRequired:'',
    tags:'',
    })
  }
  
  //the life cycle method you need
  render() {
    return (
      <div>
     <Form onSubmit={this.onSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formcareerLevel">
      <Form.Label>Career Level</Form.Label>
      <Form.Control placeholder="careerLevel" type="text" onChange ={this.onChange} value={this.state.careerLevel} />
    </Form.Group>

    <Form.Group as={Col} controlId="formjobDescription">
      <Form.Label>Job Description</Form.Label>
      <Form.Control placeholder="jobDescription" onChange ={this.onChange} value={this.state.jobDescription} />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formeducationLevel">
      <Form.Label>Education Level</Form.Label>
      <Form.Control placeholder="educationLevel"  type ="text" name="educationLevel" onChange = {this.onChange} value={this.state.educationLevel}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formtime">
      <Form.Label>time</Form.Label>
      <Form.Control placeholder ="time" type ="time" name="time" onChange = {this.onChange} value={this.state.time}/>
    </Form.Group>
  </Form.Row>
  <Form.Group as={Col} controlId="formskillsRequired">
      <Form.Label>skillsRequired</Form.Label>
      <Form.Control placeholder = "skillsRequired" type ="text" name="skillsRequired" onChange = {this.onChange} value={this.state.skillsRequired}/>
    </Form.Group>

  <Form.Group as={Col} controlId="formtags">
      <Form.Label>tags</Form.Label>
      <Form.Control placeholder = "tags" type ="text" name="tags" onChange = {this.onChange} value={this.state.tags}/>
    </Form.Group>
  
  <Button variant="primary" type="submit">
    Create Vacancy
  </Button>
</Form>;
      </div>
    )
  }
}

CreateVacancy.propTypes ={
  createVacancy: PropTypes.func.isRequired
};



//exports the component to god knows where
export default connect(null,{createVacancy})(CreateVacancy);
