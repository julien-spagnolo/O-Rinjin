import { combineReducers } from 'redux';
import user from './user';
import register from './register';
import services from './services';
import categories from './categories';
import comments from './comments';
import map from './map';

export default combineReducers({
  user,
  map,
  register,
  services,
  categories,
  comments,
});
