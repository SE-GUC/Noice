import {SEARCH_ROOM}  from '../../actions/filterActionFolder/filterTypes'

const initialState = {
// response from searching:
rooms:[]
};

export default function(state = initialState, action){
    switch(action.type)
    {
        case SEARCH_ROOM:

        return{
            ...state,
            // adds the result into searchResult
            rooms: action.payload
        }
        default: return state;
    }
}