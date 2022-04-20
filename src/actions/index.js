export const DISPLAY_MODALE = 'DISPLAY_MODALE';
export const SAVE_OFFSET = 'SAVE_OFFSET';

export const displayModale = (payload) => ({
  type: DISPLAY_MODALE,
  payload,
});

export const saveOffset = (payload) => ({
  type: SAVE_OFFSET,
  payload,
});


