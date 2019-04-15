//import your actions type
import {DELETE_ROOM} from '../actions/roomActionsFolder/RoomTypes';
//intialize the state from the db
const initialState={
//items is the initial entries in the db
Ids:[],
//we store here the response we get from making a new admin
id:{}
};

//reducers get the current state and an action
// and decides the changeds that needs
// to happen with the state and pass it back to the store
export default function(state = initialState,action){
//the types of actions are defined in our adminTypes folder
  switch(action.type){
    case DELETE_ROOM:
    return{
      ...state,
      //adds the new item in the current state
      id: action.payload
    }
    //our default returns the current state this is a place holder for now
    default: return state;
  }
}