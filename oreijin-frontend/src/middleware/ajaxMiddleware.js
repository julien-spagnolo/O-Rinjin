/* eslint-disable no-useless-escape */
import axios from 'axios';
import baseURL from '../axios';
import {
  getServicesList, getServicesListByPostalCode,
  GET_SERVICES_LIST, getServicesListSuccess,
  ADD_SERVICE, addServiceSuccess, addServiceError,
  DELETE_SERVICE, deleteServiceSuccess, deleteServiceError,
  GET_SERVICE, getServiceSuccess, getServiceError,
  EDIT_SERVICE, editServiceSuccess, editServiceError, toggleLoading,
  GET_SERVICES_LIST_BY_POSTAL_CODE, getServicesListByPostalCodeSuccess,
  getServicesListByPostalCodeError,
} from '../actions/service';
import {
  GET_CATEGORIES_LIST, getCategoriesListSuccess,
} from '../actions/categories';

import {
  DELETE_ACCOUNT, deleteAccountSuccess, deleteAccountError, logout, getUser, getUserServicesList,
} from '../actions/user';

// eslint-disable-next-line consistent-return
export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES_LIST:
      axios({
        method: 'get',
        url: `${baseURL}/api/service-categories`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(getCategoriesListSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case GET_SERVICES_LIST:
      store.dispatch(toggleLoading());
      axios({
        method: 'get',
        url: `${baseURL}/api/services`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(getServicesListSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case GET_SERVICES_LIST_BY_POSTAL_CODE:
      store.dispatch(toggleLoading());
      axios({
        method: 'get',
        url: `${baseURL}/api/services/filter/${sessionStorage.getItem('postalcode')}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(getServicesListByPostalCodeSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getServicesListByPostalCodeError());
        });
      break;
    case ADD_SERVICE:
      axios({
        method: 'post',
        url: `${baseURL}/api/services`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        data: {
          ...store.getState().services.form,
          user: action.payload.user,
          image: action.payload.image,
        },
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(addServiceSuccess(res.data));
          store.dispatch(getServicesListByPostalCode(sessionStorage.getItem('postalcode')));
          store.dispatch(getServicesList());
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(addServiceError(['Erreur serveur !']));
        });
      break;
    case DELETE_SERVICE:
      axios({
        method: 'delete',
        url: `${baseURL}/api/services/${action.payload}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(deleteServiceSuccess(res.data));
          store.dispatch(getUserServicesList());
          store.dispatch(getServicesListByPostalCode(sessionStorage.getItem('postalcode')));
          store.dispatch(getServicesList());
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(deleteServiceError(['Erreur serveur !']));
        });

      return next(action);
    case DELETE_ACCOUNT:
      axios({
        method: 'delete',
        url: `${baseURL}/api/users/${action.payload}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(deleteAccountSuccess(res.data));
          store.dispatch(logout());
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(deleteAccountError());
        });

      return next(action);
    case GET_SERVICE:
      axios({
        method: 'get',
        url: `${baseURL}/api/services/${action.payload}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(getServiceSuccess(res.data));
          store.dispatch(getUser(res.data.user.id));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getServiceError());
        });
      break;
    case EDIT_SERVICE:
      axios({
        method: 'put',
        url: `${baseURL}/api/services/${store.getState().services.service.id}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        data: {
          ...store.getState().services.editForm,
        },
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(editServiceSuccess());
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(editServiceError(['Erreur serveur !']));
        });
      break;
    default:
      return next(action);
  }
};
