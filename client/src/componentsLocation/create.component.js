import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
      super(props);
      this.onNameOfPlace = this.onNameOfPlace.bind(this);
      this.onOwnerName = this.onOwnerName.bind(this);
      this.onNameOfDepartments = this.onNameOfDepartments.bind(this);
      this.onCity = this.onCity.bind(this);
      this.onRegion = this.onRegion.bind(this);
      this.onStartTime = this.onEndTime.bind(this);
      this.onEndTime = this.onEndTime.bind(this);
      this.onRate = this.onRate.bind(this);
      this.onIsAvailable = this.onIsAvailable.bind(this);
      this.onCapacity = this.onCapacity.bind(this);
  
      this.state = {
          NameOfPlace: '',
          ownerName: '',
          nameOfDepartments:'',
          City: '',
          Region: '',
          startTime: '',
          endTime: '',
          rate: 0,
          nameOfSubdepartment: '',
          isAvailable: 'false',
          capacity: 0
      }
  }
  onNameOfPlace(e) {
    this.setState({
      NameOfPlace: e.target.value
    });
  }
  onOwnerName(e) {
    this.setState({
      ownerName: e.target.value
    })  
  }
  onNameOfDepartments(e) {
    this.setState({
      nameOfDepartments: e.target.value
    })
  }
  onCity(e) {
    this.setState({
      City: e.target.value
    })
  }
  onStartTime(e) {
    this.setState({
      startTime: e.target.value
    })
  }
  onEndTime(e) {
    this.setState({
      endTime: e.target.value
    })
  }
  onRate(e) {
    this.setState({
      rate: e.target.value
    })
  }
  onNameOfSubdepartment(e) {
    this.setState({
      nameOfSubdepartment: e.target.value
    })
  }
  onIsAvailable(e) {
    this.setState({
      isAvailable: e.target.value
    })
  }
  onCapacity(e) {
    this.setState({
      capacity: e.target.value
    })
  }
  
  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.NameOfPlace}, ${this.state.ownerName}, ${this.state.nameOfDepartments}, ${this.state.City}, ${this.state.Region}, ${this.state.startTime}, ${this.state.endTime}, ${this.state.rate}, ${this.state.nameOfSubdepartment}, ${this.state.isAvailable} and ${this.state.capacity}`)
    this.setState({
        NameOfPlace: '',
        ownerName: '',
        nameOfDepartments:'',
        City: '',
        Region: '',
        startTime: '',
        endTime: '',
        rate: '',
        nameOfSubdepartment: '',
        isAvailable: '',
        capacity: ''
    })
  }
  
  render() {
      return (
          <div style={{ marginTop: 10 }}>
              <h3>Add New Location</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Name of Place:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.NameOfPlace}
                        onChange={this.onNameOfPlace}
                        />
                  </div>
                  <div className="form-group">
                      <label>Owner Name: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.ownerName}
                        onChange={this.onOwnerName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Add Name of Departments: </label>
                      <input type="text" 
                      className="form-control"
                      value={this.state.nameOfDepartments}
                      onChange={this.onNameOfDepartments}/>
                      </div>
                  <div className="form-group">
                      <label>Add City of Department: </label>
                      <input type="text" 
                      className="form-control"
                      value={this.state.City}
                      onChange={this.onCity}
                      />
                      </div>
                  <div className="form-group">
                      <label>Add Region of Department: </label>
                      <input type="text" 
                      className="form-control"
                      value={this.state.Region}
                      onChange={this.onRegion}
                      />
                      </div>
                  <div className="form-group">
                      <label>Add Start Time Department: </label>
                      <input type="text" 
                      className="form-control"
                      value={this.state.startTime}
                      onChange={this.onStartTime}
                      />
                      </div>
                  <div className="form-group">
                      <label>Add End Time Department: </label>
                      <input type="text" 
                      className="form-control"
                      value={this.state.endTime}
                      onChange={this.onEndTime}
                      />
                      </div>
                  <div className="form-group">
                      <label>Add Rate of Department: </label>
                      <input type="number" 
                      className="form-control"
                      value={this.state.rate}
                      onChange={this.onRate}
                      />
                      </div>
                  <div className="form-group">
                      <label>Add Name of Sub-Department: </label>
                      <input type="text" 
                      className="form-control"
                      value={this.state.nameOfSubdepartment}
                      onChange={this.onNameOfSubdepartment}
                      />
                      </div>
                  <div className="form-group">
                      <label>Add isAvailable Sub-Department: </label>
                      <input type="text" 
                      className="form-control"
                      value={this.state.isAvailable}
                      onChange={this.onIsAvailable}
                      />
                      </div>
                  <div className="form-group">
                      <label>Add capacity of Sub-Department: </label>
                      <input type="number" 
                      className="form-control"
                      value={this.state.capacity}
                      onChange={this.onCapacity}
                      />
                      </div>
                  <div className="form-group">
                      <input type="submit" value="Register Location" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
  }
  