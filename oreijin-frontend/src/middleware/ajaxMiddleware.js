import axios from 'axios';
import { GET_SERVICES_LIST, getServicesListSuccess } from '../actions/service';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SERVICES_LIST:
      console.log('//== middleware getServicesList');

      // Get cookie value
      // source: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/services',
        headers: {
          'Authorization': "Bearer " + token,
        },
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          // console.log(getServicesListSuccess(res.data));
          store.dispatch(getServicesListSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });

      return next(action);
    default:
      return next(action);
  }
};
