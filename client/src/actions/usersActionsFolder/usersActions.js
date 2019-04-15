// import your actions type
import {CREATE_USER} from './usersTypes';

const axios = require('axios');

export const createUsers=  (body)=> async dispatch =>{
        await axios.post('http://localhost:5000/api/users/',body)
        .then(data => dispatch({
            type: CREATE_USER,
            payload: data
        }));
    
}

