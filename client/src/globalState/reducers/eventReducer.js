import { GET_JOINED } from '../actions/actionTypes'

const initialState = {
    events: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_JOINED:
        return {
            ...state,
            events: action.payload
        }
        default: return state;
    }
}