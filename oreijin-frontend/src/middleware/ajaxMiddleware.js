import axios from 'axios';
import {
  GET_SERVICES_LIST, getServicesListSuccess,
  ADD_SERVICE, addServiceSuccess, addServiceError,
  DELETE_SERVICE, deleteServiceSuccess, deleteServiceError,
} from '../actions/service';
import {
  GET_CATEGORIES_LIST, getCategoriesListSuccess,
} from '../actions/categories';

import { DELETE_ACCOUNT, deleteAccountSuccess, deleteAccountError } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES_LIST:
      axios({
        method: 'get',
        url: 'http://ec2-54-166-216-117.compute-1.amazonaws.com/api/service-categories',
        headers: {
          Authorization: `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')}`,
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
      return next(action);
    case GET_SERVICES_LIST:

      // console.log('//== middleware getServicesList');

      // Get cookie value
      // source: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
      axios({
        method: 'get',
        url: 'http://ec2-54-166-216-117.compute-1.amazonaws.com/api/services',
        headers: {
          Authorization: `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')}`,
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
      return next(action);
    case ADD_SERVICE:
      console.log({
        ...store.getState().services.form,
        user: action.payload,
      });
      axios({
        method: 'post',
        url: 'http://ec2-54-166-216-117.compute-1.amazonaws.com/api/services',
        headers: {
          Authorization: `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')}`,
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
      return next(action);
    case DELETE_SERVICE:
      console.log('//== delete service middleware', action.payload);
      axios({
        method: 'delete',
        url: `http://ec2-54-166-216-117.compute-1.amazonaws.com/api/services/${action.payload}`,
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
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(deleteAccountError());
        });

      return next(action);
    default:
      return next(action);
  }
};
