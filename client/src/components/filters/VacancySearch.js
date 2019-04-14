import React, {Component} from 'react';
import axios from 'axios';
import Select from 'react-select'

export default class VacancySearch extends Component {

    constructor(props) {
        super(props);

        this.onChangeAttribute = this.onChangeAttribute.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    /******CHANGE INITIAL ATTRIBUTES HERE ************/
        this.state = { 
            attribute: '',
            value: '',
            foundVacancies: []
            // foundVacancies: [{data: {
            //     careerLevel: '',
            //     jobDescription: '',
            //     educationLevel: '',
            //     partnerId: '',
            //     skillsRequired: '',
            //     applicants: '',
            //     status: '',
            //     closed: '',
            //     tags: '',

            // }}]
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

    
    onSubmit(e) { // CHANGE THIS
        e.preventDefault();
        // console.log("You pressed submit")
        const body = {
            attribute : this.state.attribute,
            value : this.state.value
        }

        axios.post('http://localhost:5000/api/vacancy/search', body)
        .then(res => this.setState({foundVacancies : res.data.data}))
        
        // console.log("Found: " + JSON.stringify(this.state.foundVacancies))

        // axios.post('http://localhost:5000/api/vacancy/search', body) // TODO if getting error check this
        //     .then(res => this.setState({retreivedSearch:res.data.data})// console.log(res.data));

       
    }

    render() {
        return (
            <div>
                <h3>Filter Vacancies</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Filter by: </label>
                     <Select
                        options={ options }
                        onChange= {(value) => {this.onChangeAttribute(value)}}
                        />
                    </div>


                    <div className="form-group">
                        <label>Enter value: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ID}
                                onChange={this.onChangeValue}
                                />
                    </div>
                    
             
                    
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Search" className="btn btn-primary" />
                        </div>
                </form>
                
                {/* {this.state.retreivedSearch.map( searched => {
                return ( // can start putting model values here
                    <ul>
                    {searched.ooo}
                    </ul>
                )})} */}

               {this.state.foundVacancies.map(foundVacancy =>{
                
                return(
                    <div>
                    <strong>ID:</strong> <pre>{foundVacancy._id}</pre>
                    <pre>Career Level: {foundVacancy.careerLevel}</pre>
                    <pre>Job Description: {foundVacancy.jobDescription}</pre>
                    <pre>Education Level: {foundVacancy.educationLevel}</pre>
                    <pre>Partner ID: {foundVacancy.partnerId}</pre>
                    <pre>Skills Required: {foundVacancy.skillsRequired}</pre>
                    <pre>Applicants: {JSON.stringify(foundVacancy.applicants, null, 4)}</pre>
                    <pre>Status: {JSON.stringify(foundVacancy.status)}</pre>
                    <pre>Closed: {JSON.stringify(foundVacancy.closed)}</pre>
                    <pre>Tags: {JSON.stringify(foundVacancy.tags)}</pre>

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