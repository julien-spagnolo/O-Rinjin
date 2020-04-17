import axios from 'axios';
import {
  GET_SERVICES_LIST, getServicesListSuccess,
  ADD_SERVICE, addServiceSuccess, addServiceError,
} from '../actions/service';

export default (store) => (next) => (action) => {
  switch (action.type) {
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
        created_by: action.payload,
        user_id: action.payload,
      });
      // axios({
      //   method: 'post',
      //   url: 'http://ec2-54-166-216-117.compute-1.amazonaws.com/api/services/add',
      //   headers: {
      //     Authorization: `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')}`,
      //   },
      //   data: {
      //     ...store.getState().services.form,
      //     // give the created_by field
      //     created_by: action.payload,
      //     user_id: action.payload,
      //   },
      //   withCredentials: true,
      // })
      //   .then((res) => {
      //     // console.log(res.data);
      //     // console.log(getServicesListSuccess(res.data));
      //     store.dispatch(addServiceSuccess(res.data));
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     store.dispatch(addServiceError());
      //   });
      return next(action);
    default:
      return next(action);
  }
};
