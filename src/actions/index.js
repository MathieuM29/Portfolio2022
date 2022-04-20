export const DISPLAY_MODALE = 'DISPLAY_MODALE';
export const SAVE_OFFSET = 'SAVE_OFFSET';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHECK_IF_EMPTY = 'CHECK_IF_EMPTY';
export const CHECK_IF_SUCCES = 'CHECK_IF_SUCCES';

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

export const checkIfEmpty = () => ({
  type: CHECK_IF_EMPTY,
});

export const checkIfSucces = () => ({
  type: CHECK_IF_SUCCES,
});

