import React from "react";
import actions from "src/modules/experience/form/ExperienceFomrActions";
const initialState = {
  initLoading: false,
  loadingSave: false,
  record: null,
};
export default (state = initialState, { type, payload }) => {
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
    return { ...state, loadingSave: true };
  }
  if (type === actions.CREATE_SUCCESS) {
    return { ...state, loadingSave: false };
  }
  if (type === actions.CREATE_ERROR) {
    return { ...state, loadingSave: false };
  }

  if (type === actions.UPDATE_STARTED) {
    return { ...state, loadingSave: true };
  }
  if (type === actions.UPDATE_SUCCESS) {
    return { ...state, loadingSave: false };
  }
  if (type === actions.UPDATE_ERROR) {
    return { ...state, loadingSave: false };
  }
  return state;
};
