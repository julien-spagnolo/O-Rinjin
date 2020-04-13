import { connect } from 'react-redux';
import Register from '../components/Visitor/Register';

import { onChangeField, onToggleTC } from '../actions/register';

const mapStateToProps = (state) => ({
  form: state.register.form,
  isTCChecked: state.register.isTCChecked,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (inputName, inputValue) => dispatch(onChangeField({
    [inputName]: inputValue,
  })),
  onToggleTC: () => dispatch(onToggleTC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
