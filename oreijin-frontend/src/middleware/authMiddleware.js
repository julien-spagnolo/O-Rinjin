import axios from 'axios';

import { LOGIN, LOGOUT, loginSuccess } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      axios({
        method: 'post',
        url: 'http://localhost:8001/api/login_check',
        withCredentials: true,
        data: {
          username: store.getState().user.form.username,
          password: store.getState().user.form.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(loginSuccess(response.data.info));
        })
        .catch((error) => {
          console.log(error);
        });
      /* console.log('bouton connexion cliqué');
      console.log(store.getState().user.form); */
      break;
    case LOGOUT:
      console.log('bouton déconnexion cliqué');
      break;
    default:
      next(action);
  }
};
