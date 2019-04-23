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
<<<<<<< HEAD
    applyMiddleware(...middleware),
   
=======
    applyMiddleware(...middleware)
>>>>>>> 75946dff48194546cfcaede96b714b67ef1717ec
    )
    );

export default store;
