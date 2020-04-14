import { connect } from 'react-redux';
import Register from '../components/Visitor/Register';

import {
  onChangeField, onToggleTC, onChangeFieldLocation, handleSubmit,
} from '../actions/register';

const mapStateToProps = (state) => ({
  form: state.register.form,
  location: state.register.location,
  isTCChecked: state.register.isTCChecked,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (inputName, inputValue) => dispatch(onChangeField({
    [inputName]: inputValue,
  })),
  onChangeFieldLocation: (inputName, inputValue) => dispatch(onChangeFieldLocation({
    [inputName]: inputValue,
  })),
  onToggleTC: () => dispatch(onToggleTC()),
  handleSubmit: () => dispatch(handleSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
