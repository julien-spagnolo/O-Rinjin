import { connect } from 'react-redux';
import Connexion from '../components/Visitor/Connexion';

import { changeLoginField } from '../actions/user';

const mapStateToProps = (state) => ({
  email: state.user.form.email,
  password: state.user.form.password,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeLoginField(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
