import { createStore, combineReducers } from 'redux';

import counterReducer from './counter'; 
import loggedReducer from './auth';


// Create a combined reducer
const rootReducer = combineReducers({
    counterReducer,
    loggedReducer,
})

export default rootReducer;