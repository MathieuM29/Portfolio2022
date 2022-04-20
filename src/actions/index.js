export const DISPLAY_MODALE = 'DISPLAY_MODALE';
export const SAVE_OFFSET = 'SAVE_OFFSET';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const displayModale = (payload) => ({
  type: DISPLAY_MODALE,
  payload,
});

export const saveOffset = (payload) => ({
  type: SAVE_OFFSET,
  payload,
});

export const changeInputValue = (value, key) => ({
  type: CHANGE_INPUT_VALUE,
  payload: {
    value, key,
  },
});

