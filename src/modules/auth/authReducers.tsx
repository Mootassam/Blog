import actions from "src/modules/auth/authActions";
import authCurrentTenant from "./authCurrentTenant";

const initialState = {
  LoadingProfile: false,
  LoadingUpdated: false,
  currentTenant: null,
  record: null,
  loading: false,
  currentUser: null,
  errorMessage: null,
  loadingInit: true,
};

export default (state = initialState, { type, payload }) => {
  if (type === actions.ERROR_MESSAGE_CLEARED) {
    return { ...state, errorMessage: null };
  }
  if (type === actions.AUTH_START) {
    return { ...state, loading: true, errorMessage: null };
  }
  if (type === actions.AUTH_SUCCESS) {
    return {
      ...state,
      loading: false,
      currentUser: payload.currentUser || null,
      currentTenant: authCurrentTenant.selectAndSaveOnStorageFor(
        payload.currentUser
      ),
      errorMessage: null,
    };
  }
  if (type === actions.AUTH_ERROR) {
    return {
      ...state,
      loading: false,
      errorMessage: payload || null,
      currentUser: null,
      currentTenant: null,
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
