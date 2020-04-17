export const GET_SERVICES_LIST = 'GET_SERVICES_LIST';
export const GET_SERVICES_LIST_SUCCESS = 'GET_SERVICES_LIST_SUCCESS';
export const ON_CHANGE_FIELD = 'ON_CHANGE_FIELD';
export const ON_CHANGE_FIELD_TYPE = 'ON_CHANGE_FIELD_TYPE';

export const getServicesList = () => ({
  type: GET_SERVICES_LIST,
});

export const getServicesListSuccess = (payload) => ({
  type: GET_SERVICES_LIST_SUCCESS,
  payload,
});

export const onChangeField = (payload) => ({
  type: ON_CHANGE_FIELD,
  payload,
});

export const onChangeFieldType = (payload) => ({
  type: ON_CHANGE_FIELD_TYPE,
  payload,
});
