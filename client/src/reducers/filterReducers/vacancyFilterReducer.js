import {SEARCH_VACANCY}  from '../../actions/filterActionsFolder/filterTypes'

const initialState = {
// response from searching:
vacancies:[],
rooms:[]
};

export default function(state = initialState, action){
    switch(action.type)
    {
        case SEARCH_VACANCY:
            return{
                ...state,
                // adds the result into searchResult
                vacancies: action.payload
            }
                
        default: return state;
    }
}