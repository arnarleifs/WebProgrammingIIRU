import { combineReducers } from "redux";
import user from './userReducer';
import event from './eventReducer';

export default combineReducers({
  user,
  event
});