/* eslint-disable camelcase */
import axios from 'axios';
import { baseURL, authorization } from '../axios';
import {
  GET_USER, getUserSuccess, getUserError,
  UPDATE_PROFILE, updateProfileSuccess, updateProfileError,
  GET_USER_SERVICES_LIST, getUserServicesListSuccess, getUserServicesListError,
} from '../actions/user';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER:
      // console.log(action.payload);
      axios({
        method: 'get',
        url: `${baseURL}/api/users/${action.payload}`,
        headers: {
          Authorization: authorization,
        },
        withCredentials: true,
      })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(getUserSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case UPDATE_PROFILE:
      // console.log(store.getState().user.profileForm);
      axios({
        method: 'put',
        url: `${baseURL}/api/users/${store.getState().user.profile.id}`,
        headers: {
          Authorization: authorization,
        },
        data: {
          ...store.getState().user.profileForm,
        },
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case GET_USER_SERVICES_LIST:
      // console.log('récupération de la liste des services de cet utilisateur');
      axios({
        method: 'get',
        url: `${baseURL}/api/services/user/${sessionStorage.getItem('id')}`,
        headers: {
          Authorization: authorization,
        },
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getUserServicesListSuccess(res.data));
        })
        .catch((err) => {
          // console.log(err);
          store.dispatch(getUserServicesListError());
        });
      break;
    default:
      return next(action);
  }
};

export default registerMiddleware;
