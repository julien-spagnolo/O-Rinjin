import { ON_CHANGE_FIELD_REPLY, ADD_COMMENT_SUCCESS } from '../actions/comments';

const initialState = {
  list: [],
  reply: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        reply: '',
      };
    case ON_CHANGE_FIELD_REPLY:
      return {
        ...state,
        reply: action.payload,
      };
    default:
      return state;
  }
};
