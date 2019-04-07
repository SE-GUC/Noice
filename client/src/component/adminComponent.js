import React from "react";
import axios from 'axios'

class adminComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          id: '',
          
        }
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
      handleSubmit = (event) => {
        alert("You want to delete: " + this.state.id )
        deleteAdmin = async () => {
            const res = await axios.delete('http://localhost:3000/api/admins/' + this.state.id )
        }
        event.preventDefault();
      }
      render(){
        <form onSubmit={this.handleSubmit} className="inputForm">
        <label>
        ID:
        <input type="text"
            value={this.state.textData}
            name="id"
            onChange={this.handleChange} />
        </label>
    </form>
}
}