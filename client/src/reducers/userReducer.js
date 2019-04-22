import { SIGN_UP } from "../actions/usersActionsFolder/usersTypes";

//reducers get the current state and an action
// and decides the changeds that needs
// to happen with the state and pass it back to the store
export default function(state = initialState,action){
    //the types of actions are defined in our adminTypes folder
      switch(action.type){
        case SIGN_UP:
        return{
          ...state,
          //adds the new item in the current state
          signUp: action.payload
        }
        //our default returns the current state this is a place holder for now
        default: return state;
      }
    }