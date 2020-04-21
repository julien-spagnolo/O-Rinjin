import axios from 'axios';
import { baseURL, authorization } from '../axios';

import {
  GET_COMMENT, getCommentSuccess,
  ADD_COMMENT, addCommentSuccess,
} from '../actions/comments';

// eslint-disable-next-line consistent-return
const commentMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COMMENT:
      axios({
        method: 'get',
        url: `${baseURL}/api/comments/${action.payload.id}`,
        headers: {
          Authorization: authorization,
        },
        withCredentials: true,
      })
        .then((res) => {
          // console.log(action.payload);
          // console.log(res.data);
          store.dispatch(getCommentSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
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
          user: store.getState().user.infos.id,
          body: store.getState().services.service.reply,
          isBlocked: false,
        },
        withCredentials: true,
      })
        .then((res) => {
          // console.log(action.payload);
          // console.log(res.data);
          store.dispatch(getCommentSuccess(res.data));
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
