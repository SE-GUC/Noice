// import your actions type
import {CREATE_VACANCY} from './VacancyTypes';

const axios = require('axios');
export const createVacancy =  (body)=> async dispatch =>{
        await axios.post('http://localhost:5000/api/vacancy/create',body)
        .then(data => dispatch({
            type: CREATE_VACANCY,
            payload: data
        }));
    
}
