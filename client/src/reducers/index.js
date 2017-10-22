import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer.js';

const rootReducer = combineReducers({
  auth: AuthReducer
});

export default rootReducer;
