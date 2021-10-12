import actions from "src/modules/auth/authActions";

const initialState = {
  LoadingProfile: false,
  LoadingUpdated: false,
  record: null,
  loading: false,
  currentUser: null,
  errorMessage: null,
  loadingInit: true,
};

export default (state = initialState, { type, payload }) => {
  if (type === actions.AUTH_START) {
    return { ...state, loading: true, errorMessage: null };
  }
  if (type === actions.AUTH_SUCCESS) {
    return {
      ...state,
      loading: false,
      currentUser: payload.currentUser || null,
      errorMessage: null,
    };
  }
  if (type === actions.AUTH_ERROR) {
    return {
      ...state,
      loading: false,
      errorMessage: payload || null,
      currentUser: null,
    };
  }

  if (type === actions.UPDATED_STARTED) {
    return { ...state, LoadingUpdated: true };
  }
  if (type === actions.UPDATED_SUCCESS) {
    return { ...state, LoadingUpdated: false };
  }
  if (type === actions.UPDATED_ERROR) {
    return { ...state, LoadingUpdated: false };
  }

  if (type === actions.AUTH_INIT_SUCCESS) {
    return {
      ...state,
      currentUser: payload.currentUser || null,
      loadingInit: false,
    };
  }
  if (type === actions.AUTH_INIT_ERROR) {
    return {
      ...state,
      currentUser: null,
      loadingInit: false,
    };
  }
  return state;
};
