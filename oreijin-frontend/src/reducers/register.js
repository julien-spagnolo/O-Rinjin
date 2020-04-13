import { ON_INPUT_CHANGE, ON_TOGGLE_TC } from '../actions/register';

const initialState = {
  form: {
    first_name: '',
    last_name: '',
    pseudo: '',
    birth_date: '',
    email: '',
    password: '',
    location: {},
  },
  isTCChecked: false,
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
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
    default:
      return state;
  }
};

export default register;
