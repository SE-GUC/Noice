import {SEARCH_VACANCY}  from '../actions/vacancyFilterActionsFolder/vacancyFilterTypes'

const initialState = {
vacancies:[],
// response from searching:
searchResult:[]
};

export default function(state = initialState, action){
    switch(action.type)
    {
        case SEARCH_VACANCY:
        return{
            ...state,
            // adds the result into searchResult
            searchResult: action.payload
        }
        default: return state;
    }
}