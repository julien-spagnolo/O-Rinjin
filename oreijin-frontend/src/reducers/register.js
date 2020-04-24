import {

  ON_CHANGE_FIELD, ON_TOGGLE_TC, LOADING_REGISTER,

  UPDATE_LOCATION, UPDATE_LOCATION_ERROR, HANDLE_SUBMIT_SUCCESS,
} from '../actions/register';

const initialState = {
  form: {
    firstname: '',
    lastname: '',
    birthdate: '',
    email: '',
    plainPassword: '',
    verificationPassword: '',
    address: '',
    city: '',
    postalcode: '',
    latitude: '',
    longitude: '',
  },
  isTCChecked: false,
  isSuccess: false,
  isError: false,
  loading: false,
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_CHANGE_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload,
        },
      };
    case ON_TOGGLE_TC:
      return {
        ...state,
        isTCChecked: !state.isTCChecked,
      };
    case UPDATE_LOCATION:
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload,
        },
      };
    case UPDATE_LOCATION_ERROR:
      return {
        ...state,

        form: { ...state.form },
        isError: true,
      };
    case LOADING_REGISTER:

      return {
        ...state,
        loading: true,
      };
    case HANDLE_SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
      };
    default:
      return state;
  }
};

export default register;
