import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.Name_of_Space = this.onChangeNameofSpace.bind(this);
    this.Founder = this.onChangeFounder.bind(this);
    this.Branch = this.onChangeBranch.bind(this);
    this.City = this.onChangeCity.bind(this);
    this.Region = this.onChangeRegion.bind(this);
    this.startTime = this.onChangestartTime.bind(this);
    this.endTime = this.onChangeendTime.bind(this);
    this.rate = this.onChangerate.bind(this);
    this.nameOfSubdepartment = this.onChangenameOfSubdepartment.bind(this);
    this.isAvailable = this.onChangeisAvailable.bind(this);
    this.capacity = this.onChangecapacity.bind(this);


    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
    Name_of_Space: '',
    Founder: '',
    Branch:'',
    City: '',
    Region: '',
    startTime: '',
    endTime: '',
    rate: '', 
    nameOfSubdepartment: '',
    isAvailable: 'false',
    capacity: 0,
      
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/api/location/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                Name_of_Space: response.data.NameOfPlace,
                Founder: response.data.ownerName,
                Branch:response.data.workingPlaceDepartments.nameOfDepartments,
                City: response.data.workingPlaceDepartments.City,
                Region: response.data.workingPlaceDepartments.Region,
                startTime: response.data.workingPlaceDepartments.startTime,
                endTime: response.data.workingPlaceDepartments.endTime,
                rate: response.data.workingPlaceDepartments.rate, 
                nameOfSubdepartment: response.data.workingPlaceDepartments.isDepartmentAvailable.nameOfSubdepartment,
                isAvailable: response.data.workingPlaceDepartments.isDepartmentAvailable.isAvailable,
                capacity: response.data.workingPlaceDepartments.isDepartmentAvailable.isAvailable,
                });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeNameofSpace(e) {
    this.setState({
        Name_of_Space: e.target.value
    });
  }
  onChangeFounder(e) {
    this.setState({
        Founder: e.target.value
    });
  }
  onChangeBranch(e) {
    this.setState({
        Branch: e.target.value
    });
  }
  onChangeCity(e) {
    this.setState({
        City: e.target.value
    });
  }
  onChangeRegion(e) {
    this.setState({
        Region: e.target.value
    });
  }
  onChangestartTime(e) {
    this.setState({
        startTime: e.target.value
    })  
  }
  onChangeendTime(e) {
    this.setState({
        endTime: e.target.value
    })
  }
  onChangerate(e) {
    this.setState({
        rate: e.target.value
    })
  }
  onChangenameOfSubdepartment(e) {
    this.setState({
        nameOfSubdepartment: e.target.value
    })
  }
  onChangeisAvailable(e) {
    this.setState({
        endTime: e.target.value
    })
  }
  onChangecapacity(e) {
    this.setState({
        capacity: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        Name_of_Space: this.state.NameOfPlace,
        Founder: this.state.ownerName,
        Branch:this.state.workingPlaceDepartments.nameOfDepartments,
        City: this.state.workingPlaceDepartments.City,
        Region: this.state.workingPlaceDepartments.Region,
        startTime: this.state.workingPlaceDepartments.startTime,
        endTime: this.state.workingPlaceDepartments.endTime,
        rate: this.state.workingPlaceDepartments.rate, 
        nameOfSubdepartment: this.state.workingPlaceDepartments.isDepartmentAvailable.nameOfSubdepartment,
        isAvailable: this.state.workingPlaceDepartments.isDepartmentAvailable.isAvailable,
        capacity: this.state.workingPlaceDepartments.isDepartmentAvailable.isAvailable,
    };
    axios.put('http://localhost:5000/api/location/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Location</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name of Space:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.NameofSpace}
                      onChange={this.onChangeNameofSpace}
                      />
                </div>
                <div className="form-group">
                    <label>Founder: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Founder}
                      onChange={this.onChangeFounder}
                      />
                </div>
                <div className="form-group">
                    <label> Branches: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Branch}
                      onChange={this.onChangeBranch}
                      />
                      <div className="form-group">
                    <label> City: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.City}
                      onChange={this.onChangeCity}
                      />
                </div>
                <div className="form-group">
                    <label> Region: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Region}
                      onChange={this.onChangeRegion}
                      />
                </div>
                <div className="form-group">
                    <label> startTime: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.startTime}
                      onChange={this.onChangestartTime}
                      />
                </div>
                <div className="form-group">
                    <label> endTime: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.endTime}
                      onChange={this.onChangeendTime}
                      />
                </div>
                <div className="form-group">
                    <label> rate: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.rate}
                      onChange={this.onChangerate}
                      />
                </div>
                <div className="form-group">
                    <label> nameOfSubdepartment: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.nameOfSubdepartment}
                      onChange={this.onChangenameOfSubdepartment}
                      />
                </div>
                <div className="form-group">
                    <label> isAvailable: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.isAvailable}
                      onChange={this.onChangeisAvailable}
                      />
                </div>
                <div className="form-group">
                    <label> capacity: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.capacity}
                      onChange={this.onChangecapacity}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Location" 
                      className="btn btn-primary"/>
                </div>
             </div>
        </form>
     </div>  
    )
  }
}
