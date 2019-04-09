import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeOwner = this.onChangeOwner.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangestartDate = this.onChangestartDate.bind(this);
        this.onChangeendDate = this.onChangeendDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
          Name: '',
          Owner: '',
          Type:'',
          Location:'',
          startDate:'',
          endDate:'',
        }
    }
    onChangeName(e) {
      this.setState({
        Name: e.target.value,
      });
    }
    onChangeOwner(e) {
      this.setState({
        Owner: e.target.value
      })  
      
    }
    onChangeType(e) {
      this.setState({
        Type: e.target.value
      })
      
    }
    onChangeLocation(e) {
      this.setState({
        Location: e.target.value
      })
      
    }
    onChangestartDate(e) {
        this.setState({
            startDate: e.target.value,
        });
      }
      onChangeendDate(e) {
        this.setState({
            endDate: e.target.value,
        });
      }
    
    async onSubmit(e) {
     
      e.preventDefault();
      const body={
        Name:this.state.Name,
        Owner:this.state.Owner,
        Type:this.state.Type,
        Location: this.state.Location,
        startDate:this.state.startDate,
        endDate:this.state.endDate
    }
      console.log(this.object)
      await axios.post('http://localhost:5000/api/events/',body)
          .then(res => console.log(res.data));
          this.setState({
            Name: '',
            Owner: '',
            Type:'',
            Location:'',
            startDate:'',
            endDate:'',
      })
      console.log(this.state.Name)
    }
   
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create Event</h3>
                <form onSubmit ={this.onSubmit}>
                    <div className="form-group">
                        <label>EVent Name:  </label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.first_name}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Event Owner: </label>
                        <input  type="text" 
                        className="form-control"
                        value={this.state.middle_name}
                        onChange={this.onChangeOwner}/>
                    </div>
                    <div className="form-group">
                        <label>Event Type(Course/Workshop/Event): </label>
                        <input  type="text" 
                        className="form-control"
                        value={this.state.last_name}
                        onChange={this.onChangeType}/>
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input  type="text" 
                        className="form-control"
                        value={this.state.age}
                        onChange={this.onChangeLocation}/>
                    </div>
                    <div className="form-group">
                        <label>startDate:  </label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.first_name}
                        onChange={this.onChangestartDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>endDate:  </label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.first_name}
                        onChange={this.onChangeendDate}
                        />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Create Event" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}