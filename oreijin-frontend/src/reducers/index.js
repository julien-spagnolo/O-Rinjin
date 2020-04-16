import { combineReducers } from 'redux';
import user from './user';
import register from './register';
import services from './services';

export default combineReducers({
  user,
  register,
  services,
});
