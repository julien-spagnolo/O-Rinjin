import axios from 'axios';
import baseURL from '../axios';

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
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        data: {
          service: store.getState().services.service.id,
          user: parseInt(sessionStorage.getItem('id'), 10),
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
