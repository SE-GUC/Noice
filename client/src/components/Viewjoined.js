import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJoined } from '../globalState/actions/eventActions';
import PropTypes from 'prop-types';

class Viewjoined extends Component {

	componentDidMount() {
		// if(this.props.isLoggedIn)
		this.props.getJoined()
	}

	render() {
			const bookItems = this.props.events.map((vacancy, index) => {
				return (
					<div key={index}>
						<h3>{vacancy.Name} </h3>
						<p>{vacancy.joinedMembers}</p>
						<h1>_____________________________________</h1>
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
	events: state.events.events,
});

export default connect(mapStateToProps,{ getJoined })(Viewjoined);