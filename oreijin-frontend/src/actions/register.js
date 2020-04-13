export const ON_CHANGE_FIELD = 'ON_CHANGE_FIELD';
export const ON_CHANGE_FIELD_LOCATION = 'ON_CHANGE_FIELD_LOCATION';
export const ON_TOGGLE_TC = 'ON_TOGGLE_TC';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
export const HANDLE_SUBMIT_SUCCESS = 'HANDLE_SUBMIT_SUCCESS';
export const HANDLE_SUBMIT_ERROR = 'HANDLE_SUBMIT_ERROR';


export const onChangeField = (payload) => ({
  type: ON_CHANGE_FIELD,
  payload,
});

export const onChangeFieldLocation = (payload) => ({
  type: ON_CHANGE_FIELD_LOCATION,
  payload,
});

export const onToggleTC = () => ({
  type: ON_TOGGLE_TC,
});

export const handleSubmit = () => ({
  type: HANDLE_SUBMIT,
});

export const updateLocation = (payload) => ({
  type: UPDATE_LOCATION,
  payload,
});
