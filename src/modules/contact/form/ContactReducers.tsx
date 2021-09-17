/* eslint-disable import/no-anonymous-default-export */
import actions from "src/modules/contact/form/ContactActions";

const initialData = {
  saveLoading: false,
  record: null,
};
export default (state = initialData, { type }) => {
  if (type === actions.CREATE_STARTED) {
    return { ...state, saveLoading: true };
  }
  if (type === actions.CREATED_SUCCESS) {
    return { ...state, saveLoading: false };
  }
  if (type === actions.CREATED_ERROR) {
    return { ...state, saveLoading: false };
  }

  return state;
};
