// Install axios library later ---> import axios from 'axios';

import { LOGIN, LOGOUT } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      console.log('bouton connexion cliqué');
      console.log(store.getState().user.form);
      break;
    case LOGOUT:
      console.log('bouton déconnexion cliqué');
      break;
    default:
      next(action);
  }
};
