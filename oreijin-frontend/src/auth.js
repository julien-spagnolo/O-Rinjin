class Auth {
  constructor() {
    this.token = null;
  }

  login = (token) => {
    sessionStorage.setItem('token', token);
  }

  logout = () => {
    sessionStorage.clear();
  }

  isAuthenticated = () => sessionStorage.getItem('token');
}

export default new Auth();
