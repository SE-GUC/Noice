// import your actions type
import {AXIOS_POST,AXIOS_GET} from './adminTypes';

const axios = require('axios');
export const axiosPosts =  (body)=> async dispatch =>{
        await axios.post('http://localhost:5000/api/admins/create',body)
        .then(data => dispatch({
            type: AXIOS_POST,
            payload: data
        }));
    
}
