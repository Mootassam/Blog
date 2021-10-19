import React from "react";
import actions from "src/modules/experience/form/ExperienceFomrActions";
const initialState = {
  loadingSave: false,
  record: null,
};
export default (state = initialState, { type }) => {
  if (type === actions.CREATE_STARTED) {
    return { ...state, loading: true };
  }
  if (type === actions.CREATE_SUCCESS) {
    return { ...state, loading: false };
  }
  if (type === actions.CREATE_ERROR) {
    return { ...state, loading: false };
  }

  return state;
};
