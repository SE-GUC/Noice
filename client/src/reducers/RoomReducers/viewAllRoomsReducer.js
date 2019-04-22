import {VIEW_ALL_ROOMS}  from '../../actions/roomActionFolder/roomTypes'

const initialState = {
// response from searching:
room:{},
rooms:[]
};

export default function(state = initialState, action){
    switch(action.type)
    {
        case VIEW_ALL_ROOMS:
        console.log(action.payload)
        return{
            ...state,
            // adds the result into searchResult
            rooms: action.payload
        }
        default: return state;
    }
}