import {
  CHANGE_LOGIN_FIELD, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_LOADING,
  DELETE_ACCOUNT_SUCCESS, DELETE_ACCOUNT_ERROR, GET_USER_SUCCESS,
} from '../actions/user';


const initialState = {
  form: {
    username: '',
    password: '',
  },
  infos: {},
  profile: {},
  isLogged: false,
  loading: false,
  isSuccess: false,
  isError: false,
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
      };
    case DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        isSuccess: true,
        infos: {},
      };
    case DELETE_ACCOUNT_ERROR:
      return {
        ...state,
        isError: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        profile: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
