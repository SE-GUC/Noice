// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {viewAdmins,selectAdminToUpdate} from '../../actions/adminActionsFolder/adminActions';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Admins from '../UIComponents/Admins';
const mapStateToProps = (state) =>{
    return{
      admins: state.admins
    }
  }
  

class ViewAdmins extends Component {
    componentDidMount(){
        this.props.viewAdmins()
    }
  //the life cycle method you need
  render() {
      console.log(this.props.admins)
    return (

      <div>
           <Admins admins = {this.props.admins} selectAdminToUpdate = {this.props.selectAdminToUpdate}/>
           
      </div>
    )
  }
}

ViewAdmins.propTypes ={
  viewAdmins: PropTypes.func.isRequired
};


//exports the component to god knows where
export default connect(mapStateToProps,{viewAdmins,selectAdminToUpdate})(ViewAdmins);
