// import your actions type
import {CREATE_ADMIN, VIEW_ADMINS,UPDATE_ADMIN,SELECT_ADMIN_UPD} from './adminTypes';

const axios = require('axios');
export const createAdmin =  (body)=> async dispatch =>{
        await axios.post('http://localhost:5000/api/admins/create',body)
        .then(data => dispatch({
            type: CREATE_ADMIN,
            payload: data
        }));
    
}

export const viewAdmins =  ()=> async dispatch =>{
    await axios.get('http://localhost:5000/api/admins')
    .then(data => dispatch({
        type: VIEW_ADMINS,
        payload: data.data.data
    }));

}

export const updateAdmin =  (id,body)=> async dispatch =>{
    await axios.put('http://localhost:5000/api/admins/'+id,body)
    .then(data => dispatch({
        type: UPDATE_ADMIN,
        payload: data.data.data
    }));

}

export const selectAdminToUpdate = (admin) =>dispatch=>{
    dispatch({
        type: SELECT_ADMIN_UPD,
        payload:admin
    })
}
