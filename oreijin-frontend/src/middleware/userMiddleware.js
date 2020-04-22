/* eslint-disable camelcase */
import axios from 'axios';
import { GET_USER, getUserSuccess, getUserError } from '../actions/user';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER:
      // console.log(action.payload);
      axios({
        method: 'get',
        url: `http://ec2-54-166-216-117.compute-1.amazonaws.com/api/users/${action.payload}`,
        headers: {
          Authorization: `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')}`,
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
      return next(action);
    default:
      return next(action);
  }
};

export default registerMiddleware;
