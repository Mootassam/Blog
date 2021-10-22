import actions from "src/modules/education/view/educationViewActions";
const initialState = {
  findLoading: false,
  record: null,
};
export default (state = initialState, { type, payload }) => {
  try {
    if (type === actions.FIND_STARTED) {
      return { ...state, findLoading: true };
    }
    if (type === actions.FIND_SUCCESS) {
      return { ...state, findLoading: false, record: payload };
    }
    if (type === actions.FIND_ERROR) {
      return { ...state, findLoading: false };
    }
  } catch (error) {}
};
