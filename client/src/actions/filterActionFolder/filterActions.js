import {SEARCH_ROOM} from './filterTypes'
import {SEARCH_VACANCY} from './filterTypes'

const axios = require('axios');

export const searchRoom = (body) => async dispatch =>{
    await axios.post('http://localhost:5000/api/users/location/searchroom', body)
    .then(res => dispatch({
        type: SEARCH_ROOM,
        payload: res.data.data
    }));

}

export const searchVacancy = (body) => async dispatch =>{
    await axios.post('http://localhost:5000/api/vacancy/search', body)
    .then(res => dispatch({
        type: SEARCH_VACANCY,
        payload: res.data.data
    }));

}