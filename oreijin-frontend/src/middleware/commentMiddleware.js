import axios from 'axios';
import { baseURL, authorization } from '../axios';

import {
  ADD_COMMENT, addCommentSuccess,
} from '../actions/comments';

// eslint-disable-next-line consistent-return
const commentMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_COMMENT:
      // console.log(store.getState().services.service);
      axios({
        method: 'post',
        url: `${baseURL}/api/comments`,
        headers: {
          Authorization: authorization,
        },
        data: {
          service: store.getState().services.service.id,
          user: sessionStorage.getItem('id'),
          body: store.getState().comments.reply,
          isBlocked: false,
        },
        withCredentials: true,
      })
        .then(() => {
          // console.log(action.payload);
          // console.log(res.data);
          store.dispatch(addCommentSuccess());
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default: return next(action);
  }
};

export default commentMiddleware;
