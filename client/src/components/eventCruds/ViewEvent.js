import React, {Component} from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {viewEvent} from '../../actions/eventActionsFolder/EventActions';

// changes visible when you reload the page
class ViewEvent extends Component {

    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ID: '',
            Name:'',
            Owner:'',
            Type:'',
            Location:'',
            StartDate:'',
            Description:'',
            tags:''
        }
    }

    onChangeID(e) {
        console.log("You typed in the ID textbox")
        this.setState({
            ID: e.target.value,
            Name:e.target.value,
            Owner:e.target.value,
            Type:e.target.value,
            Location:e.target.value,
            StartDate:e.target.value,
            Description:e.target.value,
            tags:e.target.value
        });
       
    }

    
    onSubmit(e) {
        e.preventDefault();
        console.log("You pressed submit")
        const id = this.state.ID
        this.props.viewEvent(id)
        // axios.get(`http://localhost:5000/api/member/${id}`)
        //     .then(res => this.setState({name: res.data.data.name}));
        // //console.log(member)
        

    }


    render() {
        console.log(this.props.name1)
        return (
            <div>
                <h3>get a Number of applicants on a vacancy</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID of the Event: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ID}
                                onChange={(evt) => this.onChangeID(evt)}
                                />
                    </div>
             
                    
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="get Event" className="btn btn-primary" />
                        </div>
                        <div>
                        Name : {this.props.name1.Name}
                        </div>
                        <div>
                        Owner : {this.props.name1.Owner}
                        </div>
                        <div>
                        Location : {this.props.name1.Location}
                        </div>
                        <div>
                        StartDate : {this.props.name1.StartDate}
                        </div>
                        <div>
                        EndDate : {this.props.name1.EndDate}
                        </div>
                        <div>
                        Description : {this.props.name1.Description}
                        </div>
                        <div>
                        Tags : {this.props.name1.tags}
                        
                        </div>
                       
                </form>
            </div>
        )
    }

}

ViewEvent.propTypes ={
    viewEvent: PropTypes.func.isRequired
  };

  const mapStateToProps = state =>({
    amount1: state.amount1.amount,
    name1: state.name1.name
  })

  export default connect(mapStateToProps,{viewEvent})(ViewEvent);