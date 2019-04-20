import React, {Component} from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {searchVacancy} from '../../actions/filterActionFolder/filterActions';

import Select from 'react-select'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class VacancySearch extends Component {

    constructor(props) {
        super(props);

        this.onChangeAttribute = this.onChangeAttribute.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    /******CHANGE INITIAL ATTRIBUTES HERE ************/
        this.state = { 
            attribute: '',
            value: '',
            //foundVacancies: []
            foundVacancies: [{data: {
                careerLevel: '',
                jobDescription: '',
                educationLevel: '',
                partnerId: '',
                skillsRequired: '',
                applicants: '',
                status: '',
                closed: '',
                tags: '',

            }}]
        }
    }

    onChangeAttribute(e) {
        this.setState({
            attribute: e.value
        });
        // console.log("Selected: " + this.state.attribute)
    }

    onChangeValue(e) {
        this.setState({
            value: e.target.value
        });
        // console.log("Value typed: " + this.state.value + ", For attribute: " + this.state.attribute)
    }

    
    async onSubmit(e) { // CHANGE THIS
        e.preventDefault();
        // console.log("You pressed submit")
        if (this.state.attribute === '') return;
        const body = {
            attribute : this.state.attribute,
            value : this.state.value
        }
        
        this.props.searchVacancy(body)

        this.setState({
            // attribute: '',
            // value: '',
            //foundVacancies: []
            foundVacancies: [{data: {
                careerLevel: '',
                jobDescription: '',
                educationLevel: '',
                partnerId: '',
                skillsRequired: '',
                applicants: '',
                status: '',
                closed: '',
                tags: '',

            }}]
        })
       
    }

    render() {
        return (
            <div style = {{textAlign: 'center'}}>
                <h3>Filter Vacancies</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Filter by: </label>
                     <Select options={ options }  onChange= {(value) => {this.onChangeAttribute(value)}}
                        />
                    </div>


                    <div className="form-group">
                        <label>Enter value: </label>
                        <input  type="text" className="form-control" value={this.state.ID} onChange={this.onChangeValue}/>
                    </div>
                    
                        <br/>

                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>
                
               {this.props.vacancay.map(foundVacancy =>{
                
                return(
                    
                    <div>
                        
                        <Card  border="primary" style={{ width: '22rem', margin: 'auto', textAlign: 'left' }}>
                        <Card.Header><Card.Title>ID:{foundVacancy._id}</Card.Title></Card.Header>
                        <Card.Body>
                    <strong>Career Level:</strong><pre> {foundVacancy.careerLevel}</pre>
                    <strong>Job Description:</strong> <pre>{foundVacancy.jobDescription}</pre>
                    <strong>Education Level:</strong> <pre>{foundVacancy.educationLevel}</pre>
                    <strong>Partner ID:</strong><pre> {foundVacancy.partnerId}</pre>
                    <strong>Skills Required:</strong><pre> {foundVacancy.skillsRequired}</pre>
                    <strong>Applicants:</strong> <pre>{JSON.stringify(foundVacancy.applicants, null, 4)}</pre>
                    <strong>Status:</strong><pre> {JSON.stringify(foundVacancy.status)}</pre>
                    <strong>Closed:</strong><pre> {JSON.stringify(foundVacancy.closed)}</pre>
                    <strong>Tags:</strong><pre> {JSON.stringify(foundVacancy.tags)}</pre>
                    </Card.Body>
                        </Card>
                        
                    <hr />
                    </div>
                )})}
                
                
                
            </div> 

        ) // rendering ends here
    }

}


/*** CHANGE THIS FOR EVERY ENTITY ****/
const options = [
    { label: "Career Level", value: "careerLevel" },
    { label: "Job Description", value: "jobDescription" },
    { label: "Education Level", value: "educationLevel" },
    { label: "Partner ID", value: "partnerId" },
    { label: "Skills Required", value: "skillsRequired" },
    { label: "Applicants", value: "applicants" },
    { label: "Status", value: "status" },
    { label: "Closed", value: "closed" },
    { label: "Tags", value: "tags" },
  ]



  VacancySearch.propTypes ={
    searchVacancy: PropTypes.func.isRequired,
    vacancay: PropTypes.array.isRequired
  };

  const mapStateToProps = state =>({
    vacancay: state.vacancay.vacancies
  })

  export default connect(mapStateToProps,{searchVacancy})(VacancySearch);