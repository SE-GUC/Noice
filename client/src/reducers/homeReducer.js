import {GETVACANCY} from '../actions/vacancyActionFolder/vacancyTypes'

const initialState={
    vacancies:[]
}

export default function(state = initialState,action){
    //the types of actions are defined in our adminTypes folder
      switch(action.type){
        case GETVACANCY:
        console.log('switch called '+state.items)
        return{
          ...state,
          //adds the new item in the current state
          vacancies: action.payload
        }
        //our default returns the current state this is a place holder for now
        default: return state;
      }
    }