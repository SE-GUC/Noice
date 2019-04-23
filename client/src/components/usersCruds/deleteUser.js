import React, {Component} from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteUser} from '../../actions/usersActionsFolder/usersActions';

// changes visible when you reload the page
class deleteUser1 extends Component {

    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
        }
    }

    onChangeID(e) {
        console.log("You typed in the ID textbox")
        this.setState({
            _id: e.target.value
        });
       
    }

    
    onSubmit(e) {
        e.preventDefault();
        console.log("You pressed submit")
        const idToDelete = this.state._id
        this.props.deleteUser(idToDelete)  

    }

    render() {
        return (
            <div>
                <h3>Delete a User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID of the Event you want to delete: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state._id}
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

deleteUser1.propTypes ={
    deleteUser: PropTypes.func.isRequired
  };

export default connect(null,{deleteUser})(deleteUser1);