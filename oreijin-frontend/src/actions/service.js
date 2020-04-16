export const GET_SERVICES_LIST = "GET_SERVICES_LIST";
export const GET_SERVICES_LIST_SUCCESS = "GET_SERVICES_LIST_SUCCESS";

export const getServicesList = () => ({
  type: GET_SERVICES_LIST,
});

export const getServicesListSuccess = (payload) => ({
  type: GET_SERVICES_LIST_SUCCESS,
  payload,
});
