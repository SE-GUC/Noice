// import your actions type
import {CREATE_USER} from './usersTypes';
import {SIGN_UP} from './usersTypes';
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
   const x= await axios.post('http://localhost:5000/api/users/register',body)
    .then(data => dispatch({
        type: SIGN_UP,
        payload: data
    }));
    console.log(x)

};

export const viewUser = id => async dispatch => {
    console.log("action called");
    await axios.get(`http://localhost:5000/api/users/${id}`, id).then(data =>
      dispatch({
        type: VIEW_USER,
        payload: data
      })
    );
  };
