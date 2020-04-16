import { GET_SERVICES_LIST_SUCCESS } from '../actions/service';

const initialState = {
  services: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SERVICES_LIST_SUCCESS:
      console.log('//== services reducers');
      return {
        ...state,
        services: [
          ...action.payload,
        ],
      };
    default:
      return state;
  }
};
