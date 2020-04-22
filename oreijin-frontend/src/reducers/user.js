import {
  CHANGE_LOGIN_FIELD, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_LOADING,
  DELETE_ACCOUNT_SUCCESS, DELETE_ACCOUNT_ERROR, GET_USER_SUCCESS,
  CHANGE_PROFILE_FIELD,
} from '../actions/user';


const initialState = {
  form: {
    username: '',
    password: '',
  },
  infos: {},
  profile: {},
  profileForm: {},
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
        profileForm: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          postalCode: action.payload.postalCode,
          address: action.payload.address,
          city: action.payload.city,
        },
      };
    case CHANGE_PROFILE_FIELD:
      return {
        ...state,
        profileForm: {
          ...state.profileForm,
          ...action.payload,
        }
      }
    default:
      return state;
  }
};
