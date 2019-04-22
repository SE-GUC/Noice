import {DELETE_ROOM, CREATE_ROOM, UPDATE_ROOM, VIEW_ALL_ROOMS} from './roomTypes'

const axios = require('axios');

export const updateRoom = (id,body) => async dispatch =>{
    await axios.post('http://localhost:5000/api/users/location/room/update/curr_room/'+id,body)
    .then(res => dispatch({
        type: UPDATE_ROOM,
        payload: res.data.data
    }));

}

export const createRoom = (id,body) => async dispatch =>{
    await axios.put(`http://localhost:5000/api/users/location/add_room/${id}`,body)
    .then(res => dispatch({
        type: CREATE_ROOM,
        payload: res.data.data
    }));

}

export const deleteRoom = (id) => async dispatch =>{
    await axios.delete(`http://localhost:5000/api/users/location/room/delete/curr_room/${id}`)
    .then(res => dispatch({
        type: DELETE_ROOM,
        payload: res.data.data
    }));

}

export const viewAllRooms = (id) => async dispatch =>{
    await axios.get(`http://localhost:5000/api/users/location/room/get/rooms_for_loc/${id}`)
    .then(res => {
        console.log(res.data.rooms)
        dispatch({
        type: VIEW_ALL_ROOMS, 
        payload: res.data.rooms
    })});

}