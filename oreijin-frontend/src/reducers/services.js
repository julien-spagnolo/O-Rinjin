import { v4 as uuid } from 'uuid';

import {
  GET_SERVICES_LIST_SUCCESS,
  ON_CHANGE_FIELD,
  ON_CHANGE_FIELD_TYPE,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_ERROR,
  RESET_SERVICE_FORM,
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
  isSuccess: false,
  isError: false,
};

export const getServicesWithUuid = (state = initialState) => state.services.map((service) => ({
  id: service.id,
  title: service.title,
  body: service.body,
  type: service.type,
  image: service.image,
  active: service.active,
  createdAT: service.createdAT,
  updatedAt: service.updatedAt,
  user: service.user,
  comment: service.comment,
  serviceCategory: service.serviceCategory,
  uuid: uuid(),
}));

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
    default:
      return state;
  }
};
