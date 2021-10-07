import actions from "src/modules/auth/authActions";

const initialState = {
  LoadingProfile: false,
  LoadingUpdated: false,
  record: null,
};

export default (state = initialState, { type }) => {
  if (type === actions.UPDATED_STARTED) {
    return { ...state, LoadingUpdated: true };
  }
  if (type === actions.UPDATED_SUCCESS) {
    return { ...state, LoadingUpdated: false };
  }
  if (type === actions.UPDATED_ERROR) {
    return { ...state, LoadingUpdated: false };
  }
  return state;
};
