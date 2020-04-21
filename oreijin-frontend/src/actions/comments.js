export const GET_COMMENT = 'GET_COMMENT';
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
export const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR';

export const getComment = (payload) => ({
  type: GET_COMMENT,
  payload,
});

export const getCommentSuccess = (payload) => ({
  type: GET_COMMENT_SUCCESS,
  payload,
});

export const getCommentError = () => ({
  type: GET_COMMENT_ERROR,
});
