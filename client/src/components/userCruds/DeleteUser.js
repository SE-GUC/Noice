// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import axios from 'axios';
import {deleteUser} from '../../actions/userActionsFolder/UserActions';

// changes visible when you reload the page
class DeleteUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ID: '',
        }
    }

    onChangeID(e) {
        console.log("You typed in the ID textbox")
        this.setState({
            ID: e.target.value
        });
       
    }

    
    onSubmit(e) {
        e.preventDefault();
        console.log("You pressed submit")
        const id = this.state.ID
        this.props.deleteUser(id)      

    }

    render() {
        return (
            <div>
                <h3>Delete a User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID of the User you want to delete: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ID}
                                onChange={(evt) => this.onChangeID(evt)}
                                />
                    </div>
             
                    
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Delete User" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }

}

DeleteUser.propTypes ={
    deleteUser: PropTypes.func.isRequired
  };

  export default connect(null,{deleteUser})(DeleteUser);