export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';

export const LOGIN = 'LOGIN';

export const LOGOUT = 'LOGOUT';

export const changeLoginField = (value, name) => ({
  type: CHANGE_LOGIN_FIELD,
  payload: {
    [name]: value,
  },
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
