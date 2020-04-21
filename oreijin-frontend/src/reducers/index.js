import { combineReducers } from 'redux';
import user from './user';
import register from './register';
import services from './services';
import categories from './categories';
import comments from './comments';

export default combineReducers({
  user,
  register,
  services,
  categories,
  comments,
});
