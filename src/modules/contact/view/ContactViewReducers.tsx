import actions from "src/modules/contact/view/ContactViewActions";
const initialState = {
  findLoading: false,
  data: null,
};
export default (state = initialState, { type, payload }) => {
  if (type === actions.FIND_STARTED) {
    return { ...state, findLoading: true };
  }
  if (type === actions.FIND_SUCCESS) {
    return { findLoading: false, data: payload };
  }
  if (type === actions.FIND_ERROR) {
    return { ...state, findLoading: false };
  }
  return state;
};
