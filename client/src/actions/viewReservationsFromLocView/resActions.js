import {GETRESFORROOM,CREATEROOMRES,UPDATEROOMRES,DELETEROOMRES} from './resTypes';

const axios = require('axios');
export const  getReservationsForRoom = (id) => async dispatch =>{
        console.log('get reservations for room called')
     await axios.get('http://localhost:5000/api/users/location/roomRes/get/res_for_room/'+id)
    .then(res => {
            dispatch({
        type: GETRESFORROOM,
        payload: res.data.data
             }) });   
     };

 export const  createRoomRes = (id,body) => async dispatch =>{
            console.log('create Room Reservations called')
         await axios.put('http://localhost:5000/api/users/location/roomRes/create/new_room_res/'+id,body)
        .then(res => {
                console.log("The answer is: "+res.data.data)
                dispatch({
            type: CREATEROOMRES
                 }) });   
         };
export const  updateRoomRes = (id,body) => async dispatch =>{
            console.log('update Room Reservations called')
         await axios.post('http://localhost:5000/api/users/location/roomRes/update/curr_room_res/'+id,body)
        .then(res => {
                console.log("The answer is: "+res.data.data)
                dispatch({
            type: UPDATEROOMRES
                 }) });   
         };
export const  deleteRoomRes = (id,body) => async dispatch =>{
       console.log('delete Room Reservations called')
    await axios.post('http://localhost:5000/api/users/location/roomRes/delete/curr_room_res/'+id,body)
   .then(res => {
           console.log("The answer is: "+res.data.data)
           dispatch({
       type: UPDATEROOMRES
            }) });   
    };        

    export const  acceptRoomRes = (id,body) => async dispatch =>{
        console.log('accept Room Reservations called')
     await axios.post('http://localhost:5000/api/users/location/roomRes/update/acc_room_res/'+id,body)
    .then(res => {
            console.log("The answer is: "+res.data.data)
            dispatch({
        type: UPDATEROOMRES
             }) });   
     };

     

     export const  rejectRoomRes = (id,body) => async dispatch =>{
        console.log('reject Room Reservations called')
     await axios.post('http://localhost:5000/api/users/location/roomRes/update/rej_room_res/'+id,body)
    .then(res => {
            console.log("The answer is: "+res.data.data)
            dispatch({
        type: UPDATEROOMRES
             }) });   
     };