import { GET_SERVICES_LIST_SUCCESS, ON_CHANGE_FIELD, ON_CHANGE_FIELD_TYPE } from '../actions/service';

const initialState = {
  services: [],
  form: {
    title: '',
    category: '',
    body: '',
    type: 0,
    image: '',
    active: true,
    createdBy: '',
    updateBy: '',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SERVICES_LIST_SUCCESS:
      // console.log('//== services reducers');
      return {
        ...state,
        services: [
          ...action.payload,
        ],
      };
    case ON_CHANGE_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload,
        },
      };
    case ON_CHANGE_FIELD_TYPE:
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
