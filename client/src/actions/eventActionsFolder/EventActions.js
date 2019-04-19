// import your actions type
import {DELETE_EVENT} from './EventTypes';
import {CREATE_EVENT} from './EventTypes';
import {UPDATE_EVENT} from './EventTypes';
import {VIEW_EVENT} from './EventTypes';

const axios = require('axios');
export const deleteEvent =  (id)=> async dispatch =>{
        await axios.delete(`http://localhost:5000/api/events/${id}`,id)
        .then(data => dispatch({
            type: DELETE_EVENT,
            payload: data
            }
        )
    );
}

export const createEvent =  (body)=> async dispatch =>{
    console.log("action called")
        await axios.post('http://localhost:5000/api/events',body)
        .then(data => dispatch({
            type: CREATE_EVENT,
            payload: data
            }
        )
        
    );
}

export const updateEvent =  (id,body)=> async dispatch =>{
    console.log("action called")
        await axios.put(`http://localhost:5000/api/events/${id}`,body)
        .then(data => dispatch({
            type: UPDATE_EVENT,
            payload: data
            }
        )
        
    );
}

export const viewEvent =  (id)=> async dispatch =>{
    console.log("action called")
        await axios.get(`http://localhost:5000/api/events/${id}`,id)
        .then(data => dispatch({
            type: VIEW_EVENT,
            payload: data
            }
        )
        
    );
}

