import axios from 'axios';
import baseURL from '../axios';
import {
  GET_SERVICES_EXCERPT, GET_USERS_EXCERPT,
  getServicesExcerptSuccess, getUsersExcerptSuccess,
} from '../actions/homeVisitor';

// eslint-disable-next-line consistent-return
const homeVisitorMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SERVICES_EXCERPT:
      // console.log('get services excerpt middleware');
      axios({
        method: 'get',
        url: `${baseURL}/services/home`,
      })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(getServicesExcerptSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case GET_USERS_EXCERPT:
      // console.log('get services excerpt middleware');
      axios({
        method: 'get',
        url: `${baseURL}/users/home`,
      })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(getUsersExcerptSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default: return next(action);
  }
};

export default homeVisitorMiddleware;
