import {
  DISPLAY_MODALE,
  SAVE_OFFSET,
} from '../actions';

const stateInitial = {
  isVisible: false,
  currentId: null,
  // offSetWorks: 0,
};

export default (state = stateInitial, action = {}) => {
  switch (action.type) {
    case DISPLAY_MODALE:
      return {
        ...state,
        isVisible: !state.isVisible,
        currentId: action.payload,
      };
    // case SAVE_OFFSET:
    //   return {
    //     ...state,
    //     offSetWorks: action.payload,
    //   };
    default:
      return state;
  }
};
