/* eslint-disable import/no-anonymous-default-export */
import actions from "src/modules/contact/form/ContactActions";

const initialData = {
  initLoading: false,
  saveLoading: false,
  record: null,
};
export default (state = initialData, { type, payload }) => {
  if (type === actions.INIT_STARTED) {
    return { ...state, initLoading: true, record: null };
  }
  if (type === actions.INIT_SUCCESS) {
    return { ...state, initLoading: false, record: payload };
  }
  if (type === actions.INIT_ERROR) {
    return { ...state, initLoading: false, record: null };
  }

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
