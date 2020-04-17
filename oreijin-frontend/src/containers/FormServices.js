import { connect } from 'react-redux';

import FormServices from '../components/Member/FormServices';

import { onChangeField, onChangeFieldType } from '../actions/service';

const mapStateToProps = (state) => ({
  form: {
    ...state.services.form,
    createdBy: state.user.infos.firstname,
  },
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (inputName, inputValue) => dispatch(onChangeField({
    [inputName]: inputValue,
  })),
  // checkAuth: () => dispatch(checkAuth()),
  onChangeFieldType: (typeValue) => dispatch(onChangeFieldType({
    type: typeValue,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormServices);
