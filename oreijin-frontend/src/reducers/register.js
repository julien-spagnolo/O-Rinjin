import {
  ON_CHANGE_FIELD, ON_TOGGLE_TC, ON_CHANGE_FIELD_LOCATION,
  UPDATE_LOCATION,
} from '../actions/register';

const initialState = {
  form: {
    first_name: 'toto',
    last_name: 'toto',
    birth_date: '2020-01-01',
    email: 'toto@toto',
    password: 'toto',
    location: {
      address: '',
      city: 'toto',
      postal_code: '93800',
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
    case UPDATE_LOCATION:
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
    default:
      return state;
  }
};

export default register;
