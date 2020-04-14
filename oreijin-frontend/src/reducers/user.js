import { CHANGE_LOGIN_FIELD, LOGIN_SUCCESS } from '../actions/user';

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
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        userInfos: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
