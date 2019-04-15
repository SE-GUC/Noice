// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {viewAllVacancy} from '../../actions/VacancyActions/VacancyActions';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
//requiring axios
//const axios = require('axios');

class Books extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// if(this.props.isLoggedIn)
		this.props.getBooks();
    }





// THIS IS NOT WORKING


    
}