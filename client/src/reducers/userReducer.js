import { SIGN_UP, VIEW_USER } from "../actions/usersActionsFolder/usersTypes";

const initialState={
  //items is the initial entries in the db
  user:[],
  //we store here the response we get from making a new admin
  user:{},
  id:{},
  name:{}
  };
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
        case DELETE_EVENT:
        return{
          ...state,
          //adds the new item in the current state
          id: action.payload
        }
        case VIEW_USER:
        return{
        ...state,
        user :action.payload.data.data
        }
        //our default returns the current state this is a place holder for now
        default: return state;
      }
    }