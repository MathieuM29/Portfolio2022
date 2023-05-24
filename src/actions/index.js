export const DISPLAY_MODALE = 'DISPLAY_MODALE';
export const SAVE_OFFSET = 'SAVE_OFFSET';
// export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_INPUT_SUBJECT_VALUE = 'CHANGE_INPUT_SUBJECT_VALUE';
export const CHANGE_INPUT_NAME_VALUE = 'CHANGE_INPUT_NAME_VALUE';
export const CHANGE_INPUT_MAIL_VALUE = 'CHANGE_INPUT_MAIL_VALUE';
export const CHANGE_INPUT_MESSAGE_VALUE = 'CHANGE_INPUT_MESSAGE_VALUE';
export const CHECK_IF_EMPTY = 'CHECK_IF_EMPTY';
export const CHECK_IF_SUCCES = 'CHECK_IF_SUCCES';
export const IS_ITEM_ACTIVE = 'IS_ITEM_ACTIVE';

export const displayModale = (payload) => ({
  type: DISPLAY_MODALE,
  payload,
});

export const saveOffset = (payload) => ({
  type: SAVE_OFFSET,
  payload,
});

// export const changeInputValue = (value, key) => ({
//   type: CHANGE_INPUT_VALUE,
//   payload: {
//     value, key,
//   },
// });

export const changeInputSubjectValue = (payload) => ({
  type: CHANGE_INPUT_SUBJECT_VALUE,
  payload,
});

export const changeInputNameValue = (payload) => ({
  type: CHANGE_INPUT_NAME_VALUE,
  payload,
});

export const changeInputMailValue = (payload) => ({
  type: CHANGE_INPUT_MAIL_VALUE,
  payload,
});

export const changeInputMessageValue = (payload) => ({
  type: CHANGE_INPUT_MESSAGE_VALUE,
  payload,
});

export const checkIfEmpty = () => ({
  type: CHECK_IF_EMPTY,
});

export const checkIfSucces = () => ({
  type: CHECK_IF_SUCCES,
});

export const isItemActive = () => ({
  type: IS_ITEM_ACTIVE,
});
