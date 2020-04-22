/* eslint-disable no-useless-escape */
import axios from 'axios';
import { baseURL, authorization } from '../axios';
import {
  GET_SERVICES_LIST, getServicesListSuccess,
  ADD_SERVICE, addServiceSuccess, addServiceError,
  DELETE_SERVICE, deleteServiceSuccess, deleteServiceError,
  GET_SERVICE, getServiceSuccess, getServiceError,
} from '../actions/service';
import {
  GET_CATEGORIES_LIST, getCategoriesListSuccess,
} from '../actions/categories';

import {
  DELETE_ACCOUNT, deleteAccountSuccess, deleteAccountError, logout, getUser,
} from '../actions/user';

// eslint-disable-next-line consistent-return
export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES_LIST:
      axios({
        method: 'get',
        url: `${baseURL}/api/service-categories`,
        headers: {
          Authorization: authorization,
        },
        withCredentials: true,
      })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(getCategoriesListSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case GET_SERVICES_LIST:

      // console.log('//== middleware getServicesList');

      // Get cookie value
      // source: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
      axios({
        method: 'get',
        url: `${baseURL}/api/services`,
        headers: {
          Authorization: authorization,
        },
        withCredentials: true,
      })
        .then((res) => {
          // console.log(res.data);
          // console.log(getServicesListSuccess(res.data));
          store.dispatch(getServicesListSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case ADD_SERVICE:
      // console.log({
      //   ...store.getState().services.form,
      //   user: action.payload,
      // });
      axios({
        method: 'post',
        url: `${baseURL}/api/services`,
        headers: {
          Authorization: authorization,
        },
        data: {
          ...store.getState().services.form,
          user: action.payload,
        },
        withCredentials: true,
      })
        .then((res) => {
          // console.log(res.data);
          // console.log(getServicesListSuccess(res.data));
          store.dispatch(addServiceSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(addServiceError());
        });
      break;
    case DELETE_SERVICE:
      console.log('//== delete service middleware', action.payload);
      axios({
        method: 'delete',
        url: `${baseURL}/api/services/${action.payload}`,
        headers: {
          Authorization: `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')}`,
        },
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(deleteServiceSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(deleteServiceError());
        });

      return next(action);
    case DELETE_ACCOUNT:
      console.log('//== delete account middleware action', action.payload);
      console.log(`Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')}`);
      axios({
        method: 'delete',
        url: `http://ec2-54-166-216-117.compute-1.amazonaws.com/api/users/${action.payload}`,
        headers: {
          Authorization: `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')}`,
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
          Authorization: authorization,
        },
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getServiceSuccess(res.data));
          store.dispatch(getUser(res.data.user.id));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getServiceError());
        });
      break;
    default:
      return next(action);
  }
};
