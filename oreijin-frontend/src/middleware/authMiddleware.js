import axios from 'axios';
import jwt from 'jwt-decode';
import {
  LOGIN, LOGOUT, CHECK_AUTH,
  loginSuccess, logoutSuccess, loading
} from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      store.dispatch(loading());
      
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/login_check',
        withCredentials: true,
        data: {
          username: store.getState().user.form.username,
          password: store.getState().user.form.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          // create a cookie for token
          // TODO set an expiration date
          
          // decoding JWT token
          const userInfos = jwt(response.data.token);
          console.log(userInfos);
          
          store.dispatch(loginSuccess({    
            roles: [...userInfos.roles],
            email: userInfos.username,
            id: userInfos.id,
            firstname: userInfos.firstname,
            lastname: userInfos.lastname,
          }));

          document.cookie = `token=${response.data.token}`;
        })
        .catch((error) => {
          console.log(error);
        });
      /* console.log('bouton connexion cliqué');
      console.log(store.getState().user.form); */
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
        store.dispatch(loginSuccess({}));
      }
      else return next(action);
      break;
    default:
      next(action);
  }
};
