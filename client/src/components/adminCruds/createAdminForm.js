// importing react and connect
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {axiosPosts} from '../../actions/adminActionsFolder/adminActions';
//requiring axios
const axios = require('axios');
//class 3ady ya3ni 
class CreateAdminForm extends Component {
  //contructor with the attribute of the crud you want
  
  
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




export default connect(null, {axiosPosts})(CreateAdminForm);