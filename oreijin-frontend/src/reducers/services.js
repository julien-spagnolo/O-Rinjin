import {
  GET_SERVICES_LIST_SUCCESS,
  ON_CHANGE_FIELD,
  ON_CHANGE_FIELD_TYPE,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_ERROR
} from '../actions/service';

const initialState = {
  services: [],
  form: {
    title: '',
    service_category_id: '',
    body: '',
    type: 0,
    image: '',
    active: true,
    user_id: '',
    created_by: '',
    update_by: '',
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
    // case ADD_SERVICE_SUCCESS:
    //   return {
    //     ...state,
    //     form: {
    //       ...state.form,
    //       ...action.payload,
    //     },
    //   };
    default:
      return state;
  }
};
