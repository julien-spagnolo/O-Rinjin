import { connect } from 'react-redux';

import FormServices from '../components/Member/FormServices';

import { onChangeField, onChangeFieldType, addService } from '../actions/service';

const mapStateToProps = (state) => ({
  form: {
    ...state.services.form,
    created_by: state.user.infos.id,
  },
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
});

export default connect(mapStateToProps, mapDispatchToProps)(FormServices);
