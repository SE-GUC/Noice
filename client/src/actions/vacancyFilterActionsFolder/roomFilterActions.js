import {SEARCH_ROOM} from './roomFilterTypes'

const axios = require('axios');

export const searchRoom = (body) => async dispatch =>{
    await axios.post('http://localhost:5000/api/users/location/searchroom', body)
    .then(res => dispatch({
        type: SEARCH_ROOM,
        payload: res.data.data
    }));

}