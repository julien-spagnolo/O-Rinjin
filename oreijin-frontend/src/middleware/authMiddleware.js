import axios from 'axios';

import { LOGIN, LOGOUT, loginSuccess, logoutSuccess } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
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
          document.cookie = `token=${response.data.token}`;

          store.dispatch(loginSuccess({
            [response.data.token]: response.data.token,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
      /* console.log('bouton connexion cliqué');
      console.log(store.getState().user.form); */
      break;
    case LOGOUT:
      // set an expiration date to delete
      document.cookie = `token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
      store.dispatch(logoutSuccess());
      break;
    default:
      next(action);
  }
};
