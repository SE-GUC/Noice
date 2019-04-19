import React, {Component} from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {viewNumberOfApplicantsOnVacancy} from '../../actions/vacancyActionsFolder/VacancyActions';

// changes visible when you reload the page
class ViewNumberOfApplicantsOnVacancy extends Component {

    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ID: ''
        }
    }

    onChangeID(e) {
        console.log("You typed in the ID textbox")
        this.setState({
            ID: e.target.value
        });
       
    }

    
    onSubmit(e) {
        e.preventDefault();
        console.log("You pressed submit")
        const id = this.state.ID
        this.props.viewNumberOfApplicantsOnVacancy(id)
        // axios.get(`http://localhost:5000/api/member/${id}`)
        //     .then(res => this.setState({name: res.data.data.name}));
        // //console.log(member)
        

    }


    render() {
        console.log(this.props.amount1)
        return (
            <div>
                <h3>get a Number of applicants on a vacancy</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID of the Vacancy: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ID}
                                onChange={(evt) => this.onChangeID(evt)}
                                />
                    </div>
             
                    
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="get Amount" className="btn btn-primary" />
                        </div>
                        <div>
                        Amount : {this.props.amount1.data}
                        </div>
                       
                </form>
            </div>
        )
    }

}

ViewNumberOfApplicantsOnVacancy.propTypes ={
    viewNumberOfApplicantsOnVacancy: PropTypes.func.isRequired
  };

  const mapStateToProps = state =>({
    amount1: state.amount1.amount
  })

  export default connect(mapStateToProps,{viewNumberOfApplicantsOnVacancy})(ViewNumberOfApplicantsOnVacancy);