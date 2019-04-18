import React, { Component } from 'react';
//defining smth like the scheme
import PropTypes from 'prop-types'
//connects the components with the store
import {connect} from 'react-redux';
//import the actions that on your component
import{getVacancies} from '../../actions/vacancyActionFolder/vacancyActions'

//import from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Home extends Component {

//a life cycle method that runs once when you first run this component
  componentWillMount(){
  this.props.getVacancies();
}
//a must have life cycle method that runs each time you render a component
  render() {  
    const vacancyItem =  this.props.home.map(vacancy =>(
      <div Key={vacancy.id} className='home-grid'>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{vacancy.jobDescription}</Card.Title>
    <Card.Text>
      {
        vacancy.skillsRequired
      }
    </Card.Text>
    <Button variant="primary">View vacancy by id </Button>
  </Card.Body>
</Card>;
      </div>
    ))
    return (
      <div>
        {vacancyItem}
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

export default connect(mapStateToProps, {getVacancies})(Home)
