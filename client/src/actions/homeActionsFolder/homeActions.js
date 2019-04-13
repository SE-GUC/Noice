import {GETVACANCY} from './homeTypes';

const axios = require('axios');
export const  getVacancies = () => async dispatch =>{
        console.log('vacancy called')
     await axios.get('http://localhost:5000/api/vacancy/')
    .then(data=> dispatch({
        type: GETVACANCY,
        payload: data
             }) );
             
     };
