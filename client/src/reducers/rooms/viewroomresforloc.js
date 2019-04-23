//import your actions type
import {GETRESFORROOM,CREATEROOMRES,UPDATEROOMRES,DELETEROOMRES} from '../../actions/viewReservationsFromLocView/resTypes';
//intialize the state from the db
const initialState={
//items is the initial entries in the db
reservations:[]
};
//reducers get the current state and an action
// and decides the changeds that needs
// to happen with the state and pass it back to the store
export default function(state = initialState,action){
  console.log({reservations:action.payload})
  switch(action.type){
    case GETRESFORROOM:
    
    return{
      ...state,
      //adds the new item in the current state
      reservations: action.payload
    }

    case CREATEROOMRES:
    return state;
    //our default returns the current state this is a place holder for now
    default: return state;
  }
}