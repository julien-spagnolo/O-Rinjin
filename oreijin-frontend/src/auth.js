/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import jwt from 'jwt-decode';

class Auth {
  constructor() {
    this.token = null;
  }

  login = (token) => {
    sessionStorage.setItem('token', token);
    const userInfos = jwt(token);

    for (const data in userInfos) {
      // console.log(userInfos[data]);
      sessionStorage.setItem(data, userInfos[data]);
    }

    return true;
  }

  logout = () => {
    sessionStorage.clear();
  }

  isAuthenticated = () => (sessionStorage.getItem('token'));
}

export default new Auth();
