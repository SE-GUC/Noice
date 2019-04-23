import React, {Component} from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteEvent} from '../../actions/eventActionsFolder/EventActions';

// changes visible when you reload the page
class DeleteEvent extends Component {

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
        this.props.deleteEvent(idToDelete)  

    }

    render() {
        return (
            <div>
                <h3>Delete a Event</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID of the Event you want to delete: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ID}
                                onChange={(evt) => this.onChangeID(evt)}
                                />
                    </div>
             
                    
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Delete Event" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }

}

DeleteEvent.propTypes ={
    deleteEvent: PropTypes.func.isRequired
  };

  export default connect(null,{deleteEvent})(DeleteEvent);