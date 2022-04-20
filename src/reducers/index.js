import {
  DISPLAY_MODALE,
  CHANGE_INPUT_VALUE,
  CHECK_IF_EMPTY,
  CHECK_IF_SUCCES,
} from '../actions';

const stateInitial = {
  isVisible: false,
  currentId: null,
  isEmpty: false,
  isSucces: false,
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
      case CHECK_IF_SUCCES:
        return {
          ...state,
          isSucces: !state.isSucces,
        };
      case CHECK_IF_EMPTY:
        return {
          ...state,
          isEmpty: !state.isEmpty,
        };
    default:
      return state;
  }
};
