import {
  DISPLAY_MODALE,
  // CHANGE_INPUT_VALUE,
  CHANGE_INPUT_SUBJECT_VALUE,
  CHANGE_INPUT_NAME_VALUE,
  CHANGE_INPUT_MAIL_VALUE,
  CHANGE_INPUT_MESSAGE_VALUE,
  CHECK_IF_EMPTY,
  CHECK_IF_SUCCES,
  IS_ITEM_ACTIVE,
} from '../actions';

const stateInitial = {
  isVisible: false,
  currentId: null,
  isEmpty: false,
  isSucces: false,
  isActive: false,
  subjectForm: "",
  nameForm: '',
  mailForm: '',
  messageForm: '',
  subjectError: '',
  nameError: '',
  mailError: '',
  messageError: '',

};

export default (state = stateInitial, action = {}) => {
  switch (action.type) {
    case DISPLAY_MODALE:
      return {
        ...state,
        isVisible: !state.isVisible,
        currentId: action.payload,
      };
      // case CHANGE_INPUT_VALUE:
      // return {
      //   ...state,
      //   [action.payload.key]: action.payload.value,
      //   // nameForm: action.payload.key.value,
      //   // mailForm: action.payload.key.value,
      //   // messageForm: action.payload.key.value,
        
      // };
      case CHANGE_INPUT_SUBJECT_VALUE:
        return {
          ...state,
          subjectForm: action.payload,
        }; 
      case CHANGE_INPUT_NAME_VALUE:
        return {
          ...state,
          nameForm: action.payload,
        };
      case CHANGE_INPUT_MAIL_VALUE:
        return {
          ...state,
          mailForm: action.payload,
        };
      case CHANGE_INPUT_MESSAGE_VALUE:
        return {
          ...state,
          messageForm: action.payload,
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
      case IS_ITEM_ACTIVE:
        return {
          ...state,
          isActive: !state.isActive,
        };
    default:
      return state;
  }
};
