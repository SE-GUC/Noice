//import your actions type
import {CREATE_ADMIN,VIEW_ADMIN} from '../actions/adminActionsFolder/adminTypes';
//intialize the state from the db
const initialState={
//items is the initial entries in the db
admins:[],
//we store here the response we get from making a new admin
};

//reducers get the current state and an action
// and decides the changeds that needs
// to happen with the state and pass it back to the store
export default function(state =initialState,action){
//the types of actions are defined in our adminTypes folder
  switch(action.type){
    case CREATE_ADMIN:
    return{
      ...state,
      //adds the new item in the current state
    }
    case VIEW_ADMIN:
    return{
      ...state,
      //adds the new item in the current state
      admins: action.payload
    }
    //our default returns the current state this is a place holder for now
    default: return state;
  }
}