import { GET_APPLICANTS , ACCEPT_APP, CLOSE_APP} from '../actions/vacancyActionFolder/vacancyTypes'

const initialState = {
    vacancys: [],
    vacancy:[]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_APPLICANTS:
        return {
            ...state,
            vacancys: action.payload
        }
        case ACCEPT_APP:
        return {
            ...state,
            vacancy: action.payload
        }
        case CLOSE_APP:
        return {
            ...state,
            vacancy: action.payload
        }
        default: return state;
    }
}