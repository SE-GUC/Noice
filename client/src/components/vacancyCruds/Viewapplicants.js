import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApplicants } from '../../actions/vacancyActionFolder/vacancyActions';
import PropTypes from 'prop-types';

class Viewapplicants extends Component {

	componentDidMount() {
		// if(this.props.isLoggedIn)
		this.props.getApplicants()
	}

	componentWillReceiveProps(next){
		if(next.closed){
			this.props.getApplicants();
		}
	}

	render() {
			const bookItems = this.props.vacancys.map((vacancy, index) => {
				var s=0;
				return (
					<div key={index}>
						<h1>{vacancy.jobDescription} </h1>
						<h3>{vacancy.applicants.map((applicant) => {return(<ul> {s=s+1}) [ID: {applicant.id}, Name: "{applicant.name}"]</ul>)})}</h3>
						<h1>________________________________________</h1>
					</div>
				);
			});
			return (
				<div>
					<h1> Posts </h1>
					{bookItems}
				</div>
			);
		
	}

};

const mapStateToProps = state => ({
	vacancys: state.vacancys.vacancys,
	closed: state.vacancys.vacancy
});

export default connect(mapStateToProps,{ getApplicants })(Viewapplicants);