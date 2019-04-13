import React, { Component } from 'react';
//defining smth like the scheme
import PropTypes from 'prop-types'
//connects the components with the store
import {connect} from 'react-redux';
//import the actions that on your component
import{getVacancies} from '../actions/homeActionsFolder/homeActions'





class Home extends Component {

//a life cycle method that runs once when you first run this component
  componentWillMount(){
  this.props.getVacancies();
}
//a must have life cycle method that runs each time you render a component
  render() {  
    const eventItem =  this.props.vacancies.map(vacancy =>(
      <div Key={vacancy.id}>
      <h3>{vacancy.careerLevel}</h3>
      <p> {vacancy.description}</p>
      </div>
    ))
    return (
      <div>
        <h1>Welcome Home</h1>
        <h2>our latest Events</h2>
        {eventItem}
      </div>
    )
  }
}
//defining the prop types that are passed to this component
Home.propTypes={
  getVacancies : PropTypes.func.isRequired,
  home: PropTypes.array.isRequired
  }


const mapStateToProps = state =>({
  home: state.home.vacancies
})

export default connect(mapStateToProps, { getVacancies })(Home);
