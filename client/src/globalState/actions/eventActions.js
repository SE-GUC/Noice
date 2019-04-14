import {GET_JOINED} from './actionTypes';
import axios from 'axios';

export const getJoined = () => dispatch => {
    axios.get("http://localhost:5000/api/events/")
    .then(res =>
        dispatch({
            type: GET_JOINED,
            payload: res.data.data,
        })
        );
    };