import React, {Component} from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {viewUser} from '../../actions/usersActionsFolder/usersActions';

// changes visible when you reload the page
class ViewUser extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            firstName:'',
            middleName:'',
            birthDate:'',
            gender:'',
            address:'',
            phoneNumber:'',
            typeOfUser:'',
            companyName:'',
            companyLocation:'',
            field:'',
            partners:'',
            events:'',
            projects:'',
            vacancies:''
        }
    }

    onChangeID(e) {
        console.log("You typed in the ID textbox")
        this.setState({

            email: e.target.value,
            firstName: e.target.value,
            middleName: e.target.value,
            birthDate: e.target.value,
            gender: e.target.value,
            address: e.target.value,
            phoneNumber: e.target.value,
            typeOfUser: e.target.value,
            companyName: e.target.value,
            companyLocation: e.target.value,
            field: e.target.value,
            partners: e.target.value,
            events: e.target.value,
            projects: e.target.value,
            vacancies: e.target.value
        });
       
    }

    
    onSubmit(e) {
        e.preventDefault();
        console.log("You pressed submit")
        const id = this.state.ID
        this.props.viewUser(id)
    }


    render() {
        console.log(this.props.viewUserByID)
        return (
            <div>
                <h3>View all users</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID of the user: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ID}
                                onChange={(evt) => this.onChangeID(evt)}
                                />
                    </div>
             
                    
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="get User" className="btn btn-primary" />
                        </div>
                        <div>
                        email : {this.props.viewUser.email}
                        </div>
                        <div>
                        firstName : {this.props.viewUser.firstName}
                        </div>
                        <div>
                        middleName : {this.props.viewUser.middleName}
                        </div>
                        <div>
                        lastName : {this.props.viewUser.lastName}
                        </div>
                        <div>
                        birthDate : {this.props.viewUser.birthDate}
                        </div>
                        <div>
                        gender : {this.props.viewUser.gender}
                        </div>
                        <div>
                        address : {this.props.viewUser.address}
                        </div>
                        <div>
                        phoneNumber : {this.props.viewUser.phoneNumber}
                        </div>
                        <div>
                        typeOfUser : {this.props.viewUser.typeOfUser}
                        </div>
                        <div>
                        companyName : {this.props.viewUser.companyName}
                        </div>
                        <div>
                        companyLocation : {this.props.viewUser.companyLocation}
                        </div>
                        <div>
                        field : {this.props.viewUser.field}
                        </div>
                        <div>
                        partners : {this.props.viewUser.partners}
                        </div>
                        <div>
                        events : {this.props.viewUser.events}
                        </div>
                        <div>
                        projects : {this.props.viewUser.projects}
                        </div>
                        <div>
                        vacancies : {this.props.viewUser.vacancies}
                        </div>
                </form>
            </div>
        )
    }

}

ViewUser.propTypes ={
    viewUser: PropTypes.func.isRequired
  };

  const mapStateToProps = state =>({
    viewUserByID: state.viewUserByID.user
  })

export default connect(mapStateToProps,{viewUser})(ViewUser);