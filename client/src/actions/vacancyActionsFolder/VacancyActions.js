// import your actions type
import {VIEW_NUMBER_OF_APPLICANTS_ON_VACANCY} from './VacancyTypes';

const axios = require('axios');
export const viewNumberOfApplicantsOnVacancy =  (id)=> async dispatch =>{
        await axios.get(`http://localhost:5000/api/vacancy/apply/viewNumberOfApplicants/${id}`,id)
        .then(data => dispatch({
            type: VIEW_NUMBER_OF_APPLICANTS_ON_VACANCY,
            payload: data
            
        }));

}
