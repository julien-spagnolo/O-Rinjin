export const ON_INPUT_CHANGE = 'ON_CHANGE_FIELD';
export const ON_TOGGLE_TC = 'ON_TOGGLE_TC';

export const onChangeField = (payload) => ({
  type: ON_INPUT_CHANGE,
  payload,
});

export const onToggleTC = () => ({
  type: ON_TOGGLE_TC,
});
