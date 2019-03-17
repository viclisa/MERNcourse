import { combineReducers } from 'redux';
import authreducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authreducer,
  errors: errorReducer
});
