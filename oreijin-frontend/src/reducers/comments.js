import { GET_COMMENT_SUCCESS } from '../actions/comments';

const initialState = {
  list: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_COMMENT_SUCCESS:
      // console.log(action.payload);
      return {
        list: [
          ...state.list,
          { ...action.payload },
        ],
      };
    default:
      return state;
  }
};
