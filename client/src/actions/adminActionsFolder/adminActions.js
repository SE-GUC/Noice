// import your actions type
import {CREATE_ADMIN} from './adminTypes';
import {UPDATE_ADMIN} from './adminTypes';

const axios = require('axios');
export const createAdmin =  (body)=> async dispatch =>{
        await axios.post('http://localhost:5000/api/admins/create',body)
        .then(data => dispatch({
            type: CREATE_ADMIN,
            payload: data
        }));
    
}

export const updateAdmin =  (body,params)=> async dispatch =>{
    await axios.post('http://localhost:5000/api/admins/update/:id',body,params)
    .then(data => dispatch({
        type: UPDATE_ADMIN,
        payload: data
    }));

}
