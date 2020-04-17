import { CHANGE_LOGIN_FIELD, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_LOADING } from '../actions/user';


const initialState = {
  form: {
    username: '',
    password: '',
  },
  infos: {},
  isLogged: false,
  loading: false,
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
        form: {
          username: '',
          password: '',
        },
        infos: {
          ...action.payload,
        },
        isLogged: true,
        loading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        infos: {},
      };

    case LOGIN_LOADING:

      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
};
