import React, { Component } from 'react';
import { connect } from 'react-redux';
import { acceptVac } from '../../actions/vacancyActionFolder/vacancyActions';
import PropTypes from 'prop-types';

class Acceptapp extends Component {
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

		this.props.acceptVac(post.id)
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
												<br />
												&nbsp;<label>Vacancy id: </label><br />
                        	&nbsp;<input type="text" name="id" onChange={this.onChange}/>
                        </div><br />
                        &nbsp;<button type="submit">Submit</button>
												<h1>{this.props.vacancy.msg}</h1>
                    </form>
				</div>
			);
		
	}

};
Acceptapp.propTypes={
	acceptVac : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
	vacancys: state.vacancys.vacancys,
	vacancy: state.vacancys.vacancy,
});

export default connect(mapStateToProps,{ acceptVac })(Acceptapp);