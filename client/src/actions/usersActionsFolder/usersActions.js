// import your actions type
import {CREATE_USER} from './usersTypes';
import {SIGN_UP} from './usersTypes';
import {UPDATE_MEMBER} from './usersTypes';
import {UPDATE_LOCATION} from './usersTypes';
import {UPDATE_PARTNER} from './usersTypes';
import { VIEW_USER } from "./usersTypes";



const axios = require('axios');

export const createUsers=  (body)=> async dispatch =>{
        await axios.post('http://localhost:5000/api/users/',body)
        .then(data => dispatch({
            type: CREATE_USER,
            payload: data
        }));
    
};
export const signUp=  (body)=> async dispatch =>{
   await axios.post('http://localhost:5000/api/users/register',body)
    .then(data => dispatch({
        type: SIGN_UP,
        payload: data
    }));


}
export const updateMember=  (body)=> async dispatch =>{
     await axios.put('http://localhost:5000/api/users/member/${id}',body)
     .then(data => dispatch({
         type: UPDATE_MEMBER,
         payload: data
     }));
     
 }

 export const updateLocation=  (body)=> async dispatch =>{
    await axios.put('http://localhost:5000/api/users/location/${id}',body)
    .then(data => dispatch({
        type: UPDATE_LOCATION,
        payload: data
    }));
    
}

export const updatePartner=  (body)=> async dispatch =>{
    await axios.put('http://localhost:5000/api/users/partner/${id}',body)
    .then(data => dispatch({
        type: UPDATE_PARTNER,
        payload: data
    }));
    
}

export const viewUser = id => async dispatch => {
    console.log("action called");
    await axios.get(`http://localhost:5000/api/users/${id}`, id).then(data =>
      dispatch({
        type: VIEW_USER,
        payload: data
      })
    );
  };

