/* eslint-disable max-len */
import slugify from 'slugify';

import {
  GET_SERVICES_LIST_SUCCESS,
  ON_CHANGE_FIELD,
  ON_CHANGE_FIELD_TYPE,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_ERROR,
  RESET_SERVICE_FORM,
  DELETE_SERVICE_ERROR,
  GET_SERVICE_SUCCESS,
  ON_CHANGE_FIELD_EDIT,
  EDIT_SERVICE_SUCCESS,
  EDIT_SERVICE_ERROR,
  TOGGLE_LOADING,
  GET_SERVICES_LIST_BY_POSTAL_CODE_SUCCESS,
  SET_SELECTED_LIST,
  SET_IS_SUCCESS_FALSE,
} from '../actions/service';
import { FILTER_BY_CATEGORY } from '../actions/filters';
import { GET_USER_SUCCESS } from '../actions/user';

const initialState = {
  list: [],
  listPostalCode: [],
  listFiltered: [],
  listPostalCodeFiltered: [],
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
    id: null,
    title: '',
    body: '',
    type: null,
    image: null,
    active: null,
    user: {},
    comment: [],
    serviceCategory: {},
    reply: '',
  },
  editForm: {
    title: '',
    body: '',
    type: false,
    serviceCategory: {},
  },
  errors: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  selectedList: false,
};

/**
 * Filters a list by category
 * @param {*} categoryId
 * @param {*} list
 */
export const filterListByCategory = (categoryId, list) => {
  if (categoryId) return list.filter((item) => item.serviceCategory.id === categoryId);
  return [];
};

/**
 * Add a slug for each service and return the list
 * @param {Object} state
 */
export const getServicesWithSlug = (list) => list.map((service) => ({
  ...service,
  slug: slugify(`${service.id} ${service.title}`, { lower: true }),
}));
// export const getServicesByPostalcodeWithSlug = (list) => state.listPostalCode.map((service) => ({
//   ...service,
//   slug: slugify(`${service.id} ${service.title}`, { lower: true }),
// }));

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
        isLoading: false,
      };
    case ON_CHANGE_FIELD:
    case ON_CHANGE_FIELD_TYPE:
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload,
        },
      };
    case ADD_SERVICE_SUCCESS:
    case EDIT_SERVICE_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        errors: [],
      };
    case ADD_SERVICE_ERROR:
    case DELETE_SERVICE_ERROR:
    case EDIT_SERVICE_ERROR:
      return {
        ...state,
        isError: true,
        isSucces: false,
        errors: [...action.payload],
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
        editForm: {
          title: '',
          body: '',
          type: false,
          serviceCategory: {},
        },
        errors: [],
        isSuccess: false,
        isError: false,
      };
    case GET_SERVICE_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        service: {
          ...state.service,
          ...action.payload,
        },
        editForm: {
          title: action.payload.title,
          body: action.payload.body,
          type: action.payload.type,
          serviceCategory: { ...action.payload.serviceCategory },
        },
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        service: {
          ...state.service,
          user: { ...action.payload },
        },
      };
    case ON_CHANGE_FIELD_EDIT:
      return {
        ...state,
        editForm: {
          ...state.editForm,
          ...action.payload,
        },
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SERVICES_LIST_BY_POSTAL_CODE_SUCCESS:
      return {
        ...state,
        listPostalCode: [...action.payload],
      };
    case SET_SELECTED_LIST:
      return {
        ...state,
        selectedList: action.payload,
      };
    case SET_IS_SUCCESS_FALSE:
      return {
        ...state,
        isSuccess: false,
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        listFiltered: [...filterListByCategory(action.payload, state.list)],
        listPostalCodeFiltered: [...filterListByCategory(action.payload, state.listPostalCode)],
      };
    default:
      return state;
  }
};
