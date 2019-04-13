//import your actions type
import {AXIOS_POST,AXIOS_GET} from '../actions/adminActionsFolder/adminTypes';

//intialize the state from the db
const initialState={
//items is the initial entries in the db
items:[],
//we store here the response we get from making a new admin
item:{}
};

//reducers get the current state and an action
// and decides the changeds that needs
// to happen with the state and pass it back to the store
export default function(state = initialState,action){
//the types of actions are defined in our adminTypes folder
  switch(action.type){
    case AXIOS_POST:
    return{
      ...state,
      //adds the new item in the current state
      items: action.payload
    }
    //our default returns the current state this is a place holder for now
    default: return state;
  }
}