import {
  ON_CHANGE_FIELD, ON_TOGGLE_TC, ON_CHANGE_FIELD_LOCATION,
  UPDATE_LOCATION, UPDATE_LOCATION_ERROR
} from '../actions/register';

const initialState = {
  form: {
    firstname: 'toto',
    lastname: 'toto',
    birthdate: '2020-01-01',
    email: 'toto@toto',
    password: 'toto',
    address: '5 rue pasteur',
    city: 'Paris',
    postalcode: '71000',
  },
  isTCChecked: false,
  errors: []
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
          ...action.payload,
        }
      };
    case UPDATE_LOCATION_ERROR:
      return {
        ...state,
        form: {...state.form},
        errors: {
          address: "Adresse introuvable, veuillez réessayer !",
        },
      };
    default:
      return state;
  }
};

export default register;
