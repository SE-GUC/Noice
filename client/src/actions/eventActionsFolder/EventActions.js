// import your actions type
import {DELETE_EVENT} from './EventTypes';

const axios = require('axios');
export const deleteEvent =  (id)=> async dispatch =>{
        await axios.delete(`http://localhost:5000/api/events/${id}`,id)
        .then(data => dispatch({
            type: DELETE_EVENT,
            payload: data
        }));
    
}
