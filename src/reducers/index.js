import {
  DISPLAY_MODALE,
  CHANGE_INPUT_VALUE,
} from '../actions';

const stateInitial = {
  isVisible: false,
  currentId: null,
};

export default (state = stateInitial, action = {}) => {
  switch (action.type) {
    case DISPLAY_MODALE:
      return {
        ...state,
        isVisible: !state.isVisible,
        currentId: action.payload,
      };
      case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
};
