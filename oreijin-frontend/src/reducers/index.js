import { combineReducers } from 'redux';
import user from './user';
import register from './register';
import services from './services';
import categories from './categories';

export default combineReducers({
  user,
  register,
  services,
  categories,
});
