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
  GET_SERVICE_SUCCESS,
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

/**
 * Add a slug for each service and return the list
 * @param {Object} state
 */
export const getServicesWithSlug = (state = initialState) => state.list.map((service) => ({
  ...service,
  slug: slugify(`${service.id} ${service.title}`, { lower: true }),
}));


/**
 * Extract the service id from the slug
 * @param {String} slug
 */
export const getServiceIdFromSlug = (slug) => {
  const words = slug.split('-');
  // console.log(words[0]);
  return words[0];
};

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
    case GET_SERVICE_SUCCESS:
      return {
        ...state,
        service: {
          ...state.service,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
