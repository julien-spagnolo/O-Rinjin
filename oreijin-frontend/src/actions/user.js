import { DELETE_SERVICE_ERROR } from './service';

export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const CHECK_AUTH = 'CHECK_AUTH';

export const LOGIN_LOADING = 'LOADING';

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_ERROR = 'DELETE_ACCOUNT_ERROR';


export const changeLoginField = (value, name) => ({
  type: CHANGE_LOGIN_FIELD,
  payload: {
    [name]: value,
  },
});

export const login = () => ({
  type: LOGIN,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});


export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const deleteAccount = (payload) => ({
  type: DELETE_ACCOUNT,
  payload,
});

export const deleteAccountSuccess = (payload) => ({
  type: DELETE_ACCOUNT_SUCCESS,
  payload,
});

export const deleteAccountError = () => ({
  type: DELETE_SERVICE_ERROR,
});
