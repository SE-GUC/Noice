import {SEARCH_VACANCY} from './vacancyFilterTypes'

const axios = require('axios');

export const searchVacancy = (body) => async dispatch =>{
    await axios.post('http://localhost:5000/api/vacancy/search', body)
    .then(res => dispatch({
        type: SEARCH_VACANCY,
        payload: res.data.data
    }));

}