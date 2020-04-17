import { connect } from 'react-redux';

import FormServices from '../components/Member/FormServices';

import {
  onChangeField, onChangeFieldType, addService, resetServiceForm,
} from '../actions/service';

const mapStateToProps = (state) => ({
  form: {
    ...state.services.form,
    created_by: state.user.infos.id,
  },
  isSuccess: state.services.isSuccess,
  isError: state.services.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (inputName, inputValue) => dispatch(onChangeField({
    [inputName]: inputValue,
  })),
  // checkAuth: () => dispatch(checkAuth()),
  onChangeFieldType: (payload) => dispatch(onChangeFieldType({
    type: payload,
  })),
  addService: (payload) => dispatch(addService(payload)),
  resetServiceForm: () => dispatch(resetServiceForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormServices);
