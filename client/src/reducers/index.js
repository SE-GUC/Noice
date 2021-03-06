//this is our root reducer
//its an index for all the happy little reducers we will make
//think of them as happy accidents just like this course
import {combineReducers} from 'redux';
import adminReducer from './adminReducer'
import homeReducer from './homeReducer'
import vacancyFilterReducer from './filterReducers/vacancyFilterReducer'
import roomFilterReducer from './filterReducers/roomFilterReducer'
import eventFilterReducer from './filterReducers/eventFilterReducer'

import eventReducer from './eventReducer';
import vacancyReducer from './vacancyReducer'
import userReducer from './userReducer';
//add your reducers here please use camelcale 
//ffs use camelcase
export default combineReducers({
    createAdmin : createAdminReducer,
    viewUserByID : userReducer,
    deleteUser : userReducer,
    home : homeReducer,
    vacancay : vacancyFilterReducer,
    room: roomFilterReducer,
    event : eventFilterReducer,
    event1: eventReducer,
    vacancys: vacancyReducer

});