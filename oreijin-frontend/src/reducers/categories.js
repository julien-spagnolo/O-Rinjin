import { GET_CATEGORIES_LIST_SUCCESS } from '../actions/categories';

const initialState = {
  list: [],
};

export const getCategoriesOptions = (state = initialState) => state.list.map((category) => ({
  key: category.id,
  text: category.title,
  value: category.id,
}));

// eslint-disable-next-line max-len
export const findCategoryById = (id, state = initialState) => state.list.find((item) => item.id === id);

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
