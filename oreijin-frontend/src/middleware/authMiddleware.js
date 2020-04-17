import axios from 'axios';
import jwt from 'jwt-decode';
import {
  LOGIN, LOGOUT, CHECK_AUTH,
  loginSuccess, logoutSuccess, loginLoading,
} from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      store.dispatch(loginLoading());

      axios({
        method: 'post',
        url: 'http://ec2-54-166-216-117.compute-1.amazonaws.com/api/login_check',
        withCredentials: true,
        data: {
          username: store.getState().user.form.username,
          password: store.getState().user.form.password,
        },
      })
        .then((response) => {
          // decoding JWT token
          const userInfos = jwt(response.data.token);
          store.dispatch(loginSuccess({
            roles: [...userInfos.roles],
            email: userInfos.username,
            id: userInfos.id,
            firstname: userInfos.firstname,
            lastname: userInfos.lastname,
          }));
          // create a cookie for token
          // TODO set an expiration date

          document.cookie = `token=${response.data.token}`;
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case LOGOUT:
      // set an expiration date to delete
      document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
      store.dispatch(logoutSuccess());
      break;
    case CHECK_AUTH:
      // Check if the cookie exists
      // source: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
      if (document.cookie.split(';').some((item) => item.trim().startsWith('token='))) {
        // Decode the token
        const userInfos = jwt(document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1'));
        store.dispatch(loginSuccess({
          roles: [...userInfos.roles],
          email: userInfos.username,
          id: userInfos.id,
          firstname: userInfos.firstname,
          lastname: userInfos.lastname,
        }));
        // store.dispatch(loginSuccess({}));
      }
      else return next(action);
      break;
    default:
      next(action);
  }
};
