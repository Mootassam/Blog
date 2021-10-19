import React from "react";
import actions from "src/modules/experience/list/ExperienceListActions";
const intialState = {
  ListLoading: false,
  rows: [],
};
export default (state = intialState, { type, payload }) => {
  if (type === actions.LIST_STARTED) {
    return { ...state, ListLoading: true };
  }
  if (type === actions.LIST_SUCCESS) {
    return { ...state, ListLoading: false, rows: payload.rows };
  }
  if (type === actions.LIST_ERROR) {
    return { ...state, ListLoading: false, rows: [] };
  }
  return state;
};
