import {SEARCH_EVENT}  from '../../actions/filterActionFolder/filterTypes'

const initialState = {
// response from searching:
events:[]
};

export default function(state = initialState, action){
    switch(action.type)
    {
        case SEARCH_EVENT:

        return{
            ...state,
            // adds the result into searchResult
            events: action.payload
        }
        default: return state;
    }
}