import { ON_INPUT_CHANGE } from '../actions/register';

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
    default:
      return state;
  }
};

export default register;
