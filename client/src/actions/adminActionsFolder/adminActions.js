// import your actions type
import {CREATE_ADMIN,VIEW_ADMIN} from './adminTypes';

const axios = require('axios');
export const createAdmin =  (body)=> async dispatch =>{
    console.log('create action called')
        await axios.post('http://localhost:5000/api/admins/',body)
        .then(res => dispatch({
            type: CREATE_ADMIN,
            payload: res.data.data
        }));
        await axios.get('http://localhost:5000/api/admins/')
    .then(res => 
        dispatch({
        type: VIEW_ADMIN,
        payloadAll: res.data.data
    }));
    
}

export const viewAdmins =  ()=> async dispatch =>{
    
    await axios.get('http://localhost:5000/api/admins/')
    .then(res => 
        dispatch({
        type: VIEW_ADMIN,
        payload: res.data.data
    }));

}
