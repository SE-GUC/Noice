import {SEARCH_VACANCY}  from '../../actions/filterActionFolder/filterTypes'

const initialState = {
// response from searching:
vacancies:[]
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