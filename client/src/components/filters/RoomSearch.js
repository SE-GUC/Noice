import React, {Component} from 'react';
import axios from 'axios';
import Select from 'react-select'

export default class Event extends Component {

    constructor(props) {
        super(props);

        this.onChangeAttribute = this.onChangeAttribute.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    /******CHANGE INITIAL ATTRIBUTES HERE ************/
        this.state = { 
            attribute: '',
            value: '',
            foundRooms: []
        }
    }

    onChangeAttribute(e) {
        this.setState({
            attribute: e.value
        });
        // console.log("Selected: " + this.state.attribute)
    }

    onChangeValue(e) {
        this.setState({
            value: e.target.value
        });
        // console.log("Value typed: " + this.state.value + ", For attribute: " + this.state.attribute)
    }

    
    onSubmit(e) { // CHANGE THIS
        e.preventDefault();
        // console.log("You pressed submit")
        const body = {
            attribute : this.state.attribute,
            value : this.state.value
        }

        axios.post('http://localhost:5000/api/users/location/searchroom', body)
        .then(res => this.setState({foundRooms : res.data.data}))
        
       console.log(this.state.foundRooms)
    }

    render() {
        return (
            <div>
                <h3>Filter Rooms</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Filter by: </label>
                     <Select
                        options={ options }
                        onChange= {(value) => {this.onChangeAttribute(value)}}
                        />
                    </div>


                    <div className="form-group">
                        <label>Enter value: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ID}
                                onChange={this.onChangeValue}
                                />
                    </div>
                    
             
                    
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Search" className="btn btn-primary" />
                        </div>
                </form>
                
                {this.state.foundRooms.map(foundRoom =>{
                
                return(
                    <div>
                    <strong>ID:</strong> <pre> {foundRoom._id}</pre>
                    <strong>Capacity: </strong> <pre>{foundRoom.capacity}</pre>
                    <strong>Is Available: </strong> <pre>{JSON.stringify(foundRoom.isAvailable)}</pre>
                    <strong>Location ID: </strong> <pre>{foundRoom.locationId}</pre>
                    <strong>Reservations: </strong> <pre>{JSON.stringify(foundRoom.reservations, null, 4)}</pre>
                    <strong>Tags: </strong> <pre>{JSON.stringify(foundRoom.tags)}</pre>

                    <hr />
                    </div>
                )})}
                
                
                
            </div> 

        ) // rendering ends here
    }

}


const options = [
    { label: "Capacity", value: "capacity" },
    { label: "Is Available", value: "isAvailable" },
    { label: "Location ID", value: "locationId" },
    { label: "Tags", value: "tags" }
  ]