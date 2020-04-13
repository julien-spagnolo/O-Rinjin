export const ON_CHANGE_FIELD = 'ON_CHANGE_FIELD';
export const ON_CHANGE_FIELD_LOCATION = 'ON_CHANGE_FIELD_LOCATION';
export const ON_TOGGLE_TC = 'ON_TOGGLE_TC';
export const ON_SELECTED_LOCATION = 'ON_SELECTED_LOCATION';


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

export const onSelectedLocation = (payload) => ({
  type: ON_SELECTED_LOCATION,
  payload,
});
