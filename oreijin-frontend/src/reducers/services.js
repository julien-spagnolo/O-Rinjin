import slugify from 'slugify';

import {
  GET_SERVICES_LIST_SUCCESS,
  ON_CHANGE_FIELD,
  ON_CHANGE_FIELD_TYPE,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_ERROR,
  RESET_SERVICE_FORM,
  ON_CHANGE_FIELD_REPLY,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_ERROR,
} from '../actions/service';

const initialState = {
  list: [],
  form: {
    title: '',
    serviceCategory: '',
    body: '',
    type: false,
    image: '',
    active: true,
    user: '',
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
          serviceCategory: '',
          body: '',
          type: false,
          image: '',
          active: true,
          user: '',
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
    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        isSuccess: true,
      };
    case DELETE_SERVICE_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
