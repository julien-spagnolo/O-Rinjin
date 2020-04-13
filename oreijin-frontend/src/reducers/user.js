import { CHANGE_LOGIN_FIELD } from '../actions/user';

const initialState = {
  form: {
    username: '',
    password: '',
  },
  isLogged: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
