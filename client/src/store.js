import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//we will change it into our db state later
const intialState ={
};

//our middleware is the thunk thingy
const middleware = [thunk];

//create the store
const store = createStore(
    rootReducer,
    intialState,
    compose(
    applyMiddleware(...middleware)
    )
    );

export default store;
