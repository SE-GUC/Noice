//import your actions type
import {DELETE_EVENT, CREATE_EVENT, UPDATE_EVENT, VIEW_EVENT} from '../actions/eventActionsFolder/EventTypes';
//intialize the state from the db
const initialState={
//items is the initial entries in the db
id:{},
event:{},
name:{}
};

//reducers get the current state and an action
// and decides the changeds that needs
// to happen with the state and pass it back to the store
export default function(state = initialState,action){
//the types of actions are defined in our adminTypes folder
  switch(action.type){
    case DELETE_EVENT:
    return{
      ...state,
      //adds the new item in the current state
      id: action.payload
    }
    case CREATE_EVENT:
    return{
      ...state,
      event: action.payload
    }
    case UPDATE_EVENT:
    return{
    ...state,
    event :action.payload
    }
    case VIEW_EVENT:
    return{
    ...state,
    name :action.payload.data.data
    }
    //our default returns the current state this is a place holder for now
    default: return state;
  }
}