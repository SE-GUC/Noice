//this is our root reducer
//its an index for all the happy little reducers we will make
//think of them as happy accidents just like this course
import {combineReducers} from 'redux';
import createAdminReducer from './adminReducer'
import homeReducer from './homeReducer'
import vacancyReducer from './vacancyReducer';
import eventReducer from './eventReducer';
//add your reducers here please use camelcale 
//ffs use camelcase
export default combineReducers({
    createAdmin : createAdminReducer,
    home : homeReducer,
    amount1: vacancyReducer,
    name1: eventReducer,
    owner1: eventReducer,
    type1: eventReducer,
    startdate1: eventReducer,
    enddate1: eventReducer,
    description1: eventReducer,
    tags1: eventReducer
    
});