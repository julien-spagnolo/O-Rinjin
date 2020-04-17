export const GET_SERVICES_LIST = 'GET_SERVICES_LIST';
export const GET_SERVICES_LIST_SUCCESS = 'GET_SERVICES_LIST_SUCCESS';
export const ON_CHANGE_FIELD = 'ON_CHANGE_FIELD';
export const ON_CHANGE_FIELD_TYPE = 'ON_CHANGE_FIELD_TYPE';
export const ADD_SERVICE = 'ADD_SERVICE';
export const ADD_SERVICE_SUCCESS = 'ADD_SERVICE_SUCCESS';
export const ADD_SERVICE_ERROR = 'ADD_SERVICE_ERROR';

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

export const addService = (payload) => ({
  type: ADD_SERVICE,
  payload,
});

export const addServiceSuccess = (payload) => ({
  type: ADD_SERVICE_SUCCESS,
  payload,
});

export const addServiceError = () => ({
  type: ADD_SERVICE_ERROR,
});
