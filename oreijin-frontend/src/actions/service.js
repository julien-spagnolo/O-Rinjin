export const GET_SERVICES_LIST = 'GET_SERVICES_LIST';
export const GET_SERVICES_LIST_SUCCESS = 'GET_SERVICES_LIST_SUCCESS';
export const ON_CHANGE_FIELD = 'ON_CHANGE_FIELD';
export const ON_CHANGE_FIELD_TYPE = 'ON_CHANGE_FIELD_TYPE';
export const ON_CHANGE_FIELD_REPLY = 'ON_CHANGE_FIELD_REPLY';
export const ADD_SERVICE = 'ADD_SERVICE';
export const ADD_SERVICE_SUCCESS = 'ADD_SERVICE_SUCCESS';
export const ADD_SERVICE_ERROR = 'ADD_SERVICE_ERROR';
export const RESET_SERVICE_FORM = 'RESET_SERVICE_FORM';
export const DELETE_SERVICE = 'DELETE_SERVICE';
export const DELETE_SERVICE_SUCCESS = 'DELETE_SERVICE_SUCCESS';
export const DELETE_SERVICE_ERROR = 'DELETE_SERVICE_ERROR';

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

export const resetServiceForm = () => ({
  type: RESET_SERVICE_FORM,
});

export const onChangeFieldReply = (payload) => ({
  type: ON_CHANGE_FIELD_REPLY,
  payload,
});

export const deleteService = (payload) => ({
  type: DELETE_SERVICE,
  payload,
});

export const deleteServiceSuccess = (payload) => ({
  type: DELETE_SERVICE_SUCCESS,
  payload,
});

export const deleteServiceError = () => ({
  type: DELETE_SERVICE_ERROR,
});
