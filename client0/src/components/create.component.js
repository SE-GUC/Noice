
import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            first_name: '',
            middle_name: '',
            last_name:'',
            age:'',
        }
    }
    onChangeFirstName(e) {
      this.setState({
        first_name: e.target.value,
      });
    }
    onChangeMiddleName(e) {
      this.setState({
        middle_name: e.target.value
      })  
      
    }
    onChangeLastName(e) {
      this.setState({
        last_name: e.target.value
      })
      
    }
    onChangeAge(e) {
      this.setState({
        age: e.target.value
      })
      
    }
    
    async onSubmit(e) {
      console.log('im called')
      e.preventDefault();
      console.log('current first name is'+ this.state.first_name)
      const body={
        firstName:this.state.first_name,
        middleName:this.state.middle_name,
        lastName:this.state.last_name,
        age: this.state.age
    }
      console.log(this.object)
      await axios.post('http://localhost:5000/api/admins/create',body)
          .then(res => console.log(res.data));
      this.setState({
            first_name: '',
            middle_name: '',
            last_name:'',
            age:'',
      })
    }
   
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create admin</h3>
                <form onSubmit ={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name:  </label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.first_name}
                        onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Middle Name: </label>
                        <input  type="text" 
                        className="form-control"
                        value={this.state.middle_name}
                        onChange={this.onChangeMiddleName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input  type="text" 
                        className="form-control"
                        value={this.state.last_name}
                        onChange={this.onChangeLastName}/>
                    </div>
                    <div className="form-group">
                        <label>age: </label>
                        <input  type="number" 
                        className="form-control"
                        value={this.state.age}
                        onChange={this.onChangeAge}/>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Create Admin" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}