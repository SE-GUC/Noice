import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeVac } from '../../actions/vacancyActionFolder/vacancyActions';
import PropTypes from 'prop-types';

class Closeapp extends Component {
	constructor(props){
		super(props);
		this.state={
			id:'',
		};
		this.onChange=this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]:e.target.value});
	}

    onSubmit(e){
		e.preventDefault();
		
		const post={
			id:this.state.id
		}

		this.props.closeVac(post.id)
		return(
			<div>
				<h1> {this.props.vacancy.msg}</h1>
			</div>
		);
    }
	render() {
			return (
				<div>
					<form onSubmit={this.onSubmit}>
                        <div>
                        	<label>&nbsp;&nbsp;Vacancy id: </label><br />
                        	<input type="text" name="id" onChange={this.onChange}/>
                        </div><br />
                        <button type="submit">Submit</button>
                    </form>
				</div>
			);
		
	}

};

const mapStateToProps = state => ({
	vacancys: state.vacancys.vacancys,
	vacancy: state.vacancys.vacancy,
});

export default connect(mapStateToProps,{ closeVac })(Closeapp);