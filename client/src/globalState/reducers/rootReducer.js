import { combineReducers } from 'redux'
import eventReducer from './eventReducer'

export default combineReducers({
    events: eventReducer,
})