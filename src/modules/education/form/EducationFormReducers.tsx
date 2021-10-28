import actions from "src/modules/education/form/EducationFormActions";
const initialState = {
  saveLoading: false,
  initLoading: false,
  record: null,
};

export default (state = initialState, { type, payload }) => {
  if (type === actions.INIT_STARTED) {
    return { ...state, initLoading: true };
  }
  if (type === actions.INIT_SUCCESS) {
    return { ...state, initLoading: false, record: payload };
  }
  if (type === actions.INIT_ERROR) {
    return { ...state, initLoading: false };
  }

  if (type === actions.CREATE_STARTED) {
    return { ...state, saveLoading: true };
  }
  if (type === actions.CREATE_SUCCESS) {
    return { ...state, saveLoading: false };
  }
  if (type === actions.CREATE_ERROR) {
    return { ...state, saveLoading: false };
  }

  if (type === actions.UPDATE_STARTED) {
    return { ...state, saveLoading: true };
  }
  if (type === actions.UPDATE_SUCCESS) {
    return { ...state, saveLoading: true };
  }
  if (type === actions.UPDATE_ERROR) {
    return { ...state, saveLoading: true };
  }

  return state;
};
