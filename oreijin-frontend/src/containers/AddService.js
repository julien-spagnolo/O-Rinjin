import { connect } from 'react-redux';
import AddService from '../components/Member/AddService';
import { getCategoriesList } from '../actions/categories';
import {
  onChangeField, onChangeFieldType, addService, resetServiceForm,
} from '../actions/service';
import { getCategoriesOptions } from '../reducers/categories';

const mapStateToProps = (state) => ({
  form: {
    ...state.services.form,
    user: parseInt(sessionStorage.getItem('id'), 10),
  },
  categories: getCategoriesOptions(state.categories),
  isSuccess: state.services.isSuccess,
  isError: state.services.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (inputName, inputValue) => dispatch(onChangeField({
    [inputName]: inputValue,
  })),
  // checkAuth: () => dispatch(checkAuth()),
  onChangeFieldType: (payload) => dispatch(onChangeFieldType({
    // eslint-disable-next-line no-unneeded-ternary
    type: payload ? true : false,
  })),
  addService: (payload) => dispatch(addService(payload)),
  resetServiceForm: () => dispatch(resetServiceForm()),
  getCategoriesList: () => dispatch(getCategoriesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddService);
