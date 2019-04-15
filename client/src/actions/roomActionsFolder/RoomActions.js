// import your actions type
import {DELETE_ROOM} from './RoomTypes';

const axios = require('axios');
export const deleteRoom =  (id)=> async dispatch =>{
        await axios.delete(`http://localhost:5000/api/room/${id}`,id)
        .then(data => dispatch({
            type: DELETE_ROOM,
            payload: data
        }));
    
}
