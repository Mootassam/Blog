import actions from "src/modules/education/form/EducationFormActions";
const initialState = {
  saveLoading: false,
};

export default (state = initialState, { type }) => {
  if (type === actions.CREATE_STARTED) {
    return { ...state, saveLoading: true };
  }
  if (type === actions.CREATE_SUCCESS) {
    return { ...state, saveLoading: false };
  }
  if (type === actions.CREATE_ERROR) {
    return { ...state, saveLoading: false };
  }
  return state;
};
