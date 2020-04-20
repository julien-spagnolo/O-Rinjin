import slugify from 'slugify';

import {
  GET_SERVICES_LIST_SUCCESS,
  ON_CHANGE_FIELD,
  ON_CHANGE_FIELD_TYPE,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_ERROR,
  RESET_SERVICE_FORM,
  ON_CHANGE_FIELD_REPLY,
} from '../actions/service';

const initialState = {
  list: [],
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
  service: {
    reply: '',
  },
  isSuccess: false,
  isError: false,
};

// Map on services list to add an uuid for unique route
export const getServicesWithSlug = (state = initialState) => state.list.map((service) => ({
  ...service,
  slug: slugify(`${service.id} ${service.title}`, { lower: true }),
}));

export const findServiceBySlug = (state, slug) => state.list.find((service) => slugify(`${service.id} ${service.title}`, { lower: true }) === slug);

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SERVICES_LIST_SUCCESS:
      // console.log('//== services reducers');
      return {
        ...state,
        list: [
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
    case ADD_SERVICE_SUCCESS:
      return {
        ...state,
        // form: {
        //   ...state.form,
        //   ...action.payload,
        // },
        isSuccess: true,
      };
    case ADD_SERVICE_ERROR:
      return {
        ...state,
        // form: {
        //   ...state.form,
        //   ...action.payload,
        // },
        isError: true,
      };
    case RESET_SERVICE_FORM:
      return {
        ...state,
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
        isSuccess: false,
        isError: false,
      };
    case ON_CHANGE_FIELD_REPLY:
      return {
        ...state,
        service: {
          reply: action.payload,
        },
      };
    default:
      return state;
  }
};
