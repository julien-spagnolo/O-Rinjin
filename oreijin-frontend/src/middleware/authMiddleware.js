import axios from 'axios';
import jwt from 'jwt-decode';

import auth from '../auth';

import {
  LOGIN, LOGOUT,
  loginSuccess, logoutSuccess, loginLoading,
} from '../actions/user';
import { baseURL } from '../axios';
import { getServicesList } from '../actions/service';

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
          // decoding JWT token
          const userInfos = jwt(response.data.token);
          auth.login(response.data.token);

          store.dispatch(loginSuccess({
            roles: [...userInfos.roles],
            email: userInfos.username,
            id: userInfos.id,
            firstname: userInfos.firstname,
            lastname: userInfos.lastname,
            longitude: userInfos.longitude,
            latitude: userInfos.latitude,
            address: userInfos.address,
          }));
          // create a cookie for token
          // TODO set an expiration date
          // document.cookie = `token=${response.data.token}`;
        })
        .then(() => {
          store.dispatch(getServicesList());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case LOGOUT:
      // set an expiration date to delete
      // document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
      auth.logout();
      store.dispatch(logoutSuccess());
      break;
    default:
      next(action);
  }
};
