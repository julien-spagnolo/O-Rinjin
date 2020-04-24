import axios from 'axios';
import jwt from 'jwt-decode';
import auth from '../auth';

import {
  LOGIN, LOGOUT, CHECK_AUTH,
  loginSuccess, logoutSuccess, loginLoading,
} from '../actions/user';
import {
  getServicesListByPostalCode,
} from '../actions/service';
import baseURL from '../axios';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      store.dispatch(loginLoading());

      axios({
        method: 'post',
        url: `${baseURL}/api/login_check`,
        withCredentials: true,
        data: {
          username: store.getState().user.form.username,
          password: store.getState().user.form.password,
        },
      })
        .then((response) => {
          // Create sessionStorages
          if (auth.login(response.data.token)) {
            // console.log(userInfos);
            store.dispatch(loginSuccess());
            // create a cookie for token
            store.dispatch(getServicesListByPostalCode());
          }
          else console.log('ECHEC');
          // document.cookie = `token=${response.data.token}`;
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case LOGOUT:
      // set an expiration date to delete
      // document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';

      // Clear sessionStorage items
      auth.logout();
      store.dispatch(logoutSuccess());
      break;
    case CHECK_AUTH:
      // Check if the cookie exists
      // source: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
      if (document.cookie.split(';').some((item) => item.trim().startsWith('token='))) {
        // Decode the token
        const userInfos = jwt(sessionStorage.getItem('token'));
        store.dispatch(loginSuccess());
        // store.dispatch(loginSuccess({}));
        store.dispatch(getServicesListByPostalCode(sessionStorage.getItem('postalcode')));
      }
      else return next(action);
      break;
    default:
      next(action);
  }
};
