import {UPDATE_ROOM}  from '../../actions/roomActionFolder/roomTypes'

const initialState = {
// response from searching:
room:[]
};

export default function(state = initialState, action){
    switch(action.type)
    {
        case UPDATE_ROOM:

        return{
            ...state,
            // adds the result into searchResult
            room: action.payload
        }
        default: return state;
    }
}