import { connect } from 'react-redux';
import Register from '../components/Visitor/Register';

import { onChangeField } from '../actions/register';

const mapStateToProps = (state) => ({
  form: state.register.form,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (inputName, inputValue) => dispatch(onChangeField({
    [inputName]: inputValue,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
