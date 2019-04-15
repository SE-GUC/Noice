// import your actions type
import {DELETE_USER} from './UserTypes';

const axios = require('axios');
export const deleteUser =  (id)=> async dispatch =>{
        await axios.delete(`http://localhost:5000/api/users/${id}`,id)
        .then(data => dispatch({
            type: DELETE_USER,
            payload: data
        }));
    
}
