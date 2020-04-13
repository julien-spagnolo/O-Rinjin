import { ON_CHANGE_FIELD, ON_TOGGLE_TC, ON_CHANGE_FIELD_LOCATION } from '../actions/register';

const initialState = {
  form: {
    first_name: '',
    last_name: '',
    pseudo: '',
    birth_date: '',
    email: '',
    password: '',
    location: {
      street: '',
      city: '',
      postal_code: '',
    },
  },
  isTCChecked: false,
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
    case ON_CHANGE_FIELD_LOCATION:
      return {
        ...state,
        form: {
          ...state.form,
          location: {
            ...state.form.location,
            ...action.payload,
          },
        },
      };
    case ON_TOGGLE_TC:
      return {
        ...state,
        isTCChecked: !state.isTCChecked,
      };
    default:
      return state;
  }
};

export default register;
