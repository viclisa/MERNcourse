import { combineReducers } from 'redux';
import authreducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authreducer,
  errors: errorReducer,
  profile: profileReducer
});
