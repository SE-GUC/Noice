// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {createVacancy} from '../../actions/vacancyActionsFolder/vacancyActions';
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
class CreateVacancy extends Component {

  //contructor with the attribute of the crud you want
   constructor(props){
    super(props)
    this.state = {
        title:'',
        careerLevel:'',
        jobDescription:'',
        educationLevel:'',
        skillsRequired:'',
        tags:'[]',
  };
    //bind the methods with the entity
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderVacancy = () => {
  
    return (
      <Form onSubmit={this.onSubmit}>
  <Form.Group as={Col} controlId="formTitle">
      <Form.Label >Title</Form.Label>
      <Form.Control placeholder = "Title" type="text" name="title" onChange = {this.onChange} value={this.state.title}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formCareerLevel">
      <Form.Label >Career Level</Form.Label>
      <Form.Control placeholder = "Career Level" type ="text" name="careerLevel" onChange = {this.onChange} value={this.state.careerLevel}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formJobDescription">
      <Form.Label >Job Description</Form.Label>
      <Form.Control placeholder = "Job Description" type ="text" name="jobDescription" onChange = {this.onChange} value={this.state.jobDescription}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formEducationLevel">
      <Form.Label >Education Level</Form.Label>
      <Form.Control placeholder = "Education Level" type ="text" name="educationLevel" onChange = {this.onChange} value={this.state.educationLevel}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formSkillsRequired">
      <Form.Label >Skills Required</Form.Label>
      <Form.Control placeholder = "Skills Required" type ="text" name="skillsRequired" onChange = {this.onChange} value={this.state.skillsRequired}/>
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
        title:this.state.title,
        careerLevel:this.state.careerLevel,
        jobDescription:this.state.jobDescription,
        educationLevel:this.state.educationLevel,
        skillsRequired:this.state.skillsRequired,
        tags:this.state.tags,
   }
   //send an axios request
   this.props.createVacancy(body)


   //reset the inputs to empty 
   this.setState({
    title:'',
    careerLevel:'',
    jobDescription:'',
    educationLevel:'',
    skillsRequired:'',
    tags:'[]',
             })
  }
  
  //the life cycle method you need
  render() {
    return (
      
        
     <Form onSubmit={this.onSubmit}>

  <Form.Row>

    <Form.Group as={Col} controlId="formFTitle">
      <Form.Label >Title</Form.Label>
      <Form.Control  placeholder="Title"  type ="text" name="title" onChange = {this.onChange} value={this.state.title}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formCareerLevel">
      <Form.Label >Career Level</Form.Label>
      <Form.Control placeholder ="Career Level" type ="text" name="careerLevel" onChange = {this.onChange} value={this.state.careerLevel}>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formJobDescription">
      <Form.Label >Job Description</Form.Label>
      <Form.Control placeholder ="Job Description" type ="text" name="jobDescription" onChange = {this.onChange} value={this.state.jobDescription}/>
    </Form.Group>
  </Form.Row>
  
  <Form.Group as={Col} controlId="formEducationLevel">
      <Form.Label >Education Level</Form.Label>
      <Form.Control placeholder = "Education Level" type ="text" name="educationLevel" onChange = {this.onChange} value={this.state.educationLevel}/>
    </Form.Group>
    
  <Form.Row>
    <Form.Group as={Col} controlId="formSkillsRequired">
      <Form.Label>Skills Required</Form.Label>
      <Form.Control placeholder = "Skills Required" type ="text" name="skillsRequired" onChange = {this.onChange} value={this.state.skillsRequired} />
    </Form.Group>

    <Form.Group as={Col} controlId="formTags">
      <Form.Label>Tags</Form.Label>
      <Form.Control placeholder = "Tags" type ="array" name="tags" onChange = {this.onChange} value={this.state.tags} />
    </Form.Group>

  </Form.Row>

<Form.Label > </Form.Label>
<Form.Group>
this.renderVacancy()

</Form.Group>
  
  <Button color="primary" className="float-right" type="submit" >
    Create Vacancy
  </Button>
</Form>
    
    )
  }
}


CreateVacancy.propTypes ={
  createVacancy: PropTypes.func.isRequired
};



//exports the component to god knows where
export default connect(null,{createVacancy})(CreateVacancy);