import React, { Component } from 'react'
const axios = require('axios');
//class 3ady ya3ni 
class createAdminForm extends Component {
  //contructor with the attribute of the crud you want
  constructor(props){
    super(props)
    this.state = {
      firstName:'',
      middleName:'',
      lastName:'',
      age:''
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
   //send an axios request
   await axios.post('http://localhost:5000/api/admins/create',body)
   .then(res => console.log(res.data));
   //reset the inputs to empty 
   this.setState({
     firstName:' ',
     middleName:' ',
     lastName:' ',
     age:'',
             })
  }
  //the life cycle method you need
  render() {
    return (
      <div>
        <h1> create admin </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label> FirstName:</label><br />
            <input type ="text" name="firstName" onChange = {this.onChange} value={this.state.firstName}/>
          </div>
          <div>
            <label> MiddleName:</label><br />
            <input type ="text" name="middleName" onChange = {this.onChange} value={this.state.middleName}/>
          </div>
          <div>
            <label> LastName:</label><br />
            <input type ="text" name="lastName" onChange = {this.onChange} value={this.state.lastName}/>
          </div>
          <div>
            <label> Age:</label><br />
            <input type ="number" name="age" onChange = {this.onChange} value={this.state.age}/>
          </div>
          <br />
          <button type ="submit">Create Admin</button>
        </form>
      </div>
    )
  }
}




export default createAdminForm