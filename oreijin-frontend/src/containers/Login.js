import { connect } from 'react-redux';
import Login from '../components/Visitor/Login';

import { changeLoginField, login, logout } from '../actions/user';

const mapStateToProps = (state) => ({
  email: state.user.form.email,
  password: state.user.form.password,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeLoginField(value, name));
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
