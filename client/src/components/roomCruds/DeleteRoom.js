import React, {Component} from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteRoom} from '../../actions/roomActionsFolder/RoomActions';

// changes visible when you reload the page
class DeleteRoom extends Component {

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
        const idToDelete = this.state.ID
        this.props.deleteRoom(idToDelete)
    }

    render() {
        return (
            <div>
                <h3>Delete a Room</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID of the Room you want to delete: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ID}
                                onChange={(evt) => this.onChangeID(evt)}
                                />
                    </div>
             
                    
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Delete Room" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }

}

DeleteRoom.propTypes ={
    deleteRoom: PropTypes.func.isRequired
  };

  export default connect(null,{deleteRoom})(DeleteRoom);