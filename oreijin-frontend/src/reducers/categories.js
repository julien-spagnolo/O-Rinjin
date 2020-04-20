import { GET_CATEGORIES_LIST_SUCCESS } from '../actions/categories';

const initialState = {
  list: [],
};

export const getCategoriesOptions = (state = initialState) => state.list.map((category) => ({
  key: category.id,
  text: category.title,
  value: category.id,
}));


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CATEGORIES_LIST_SUCCESS:
      return {
        list: [...action.payload],
      };
    default:
      return state;
  }
};
