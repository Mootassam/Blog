import actions from "src/modules/education/list/EducationListActions";

const initialState = {
  listLoading: false,
  rows: [],
};

export default (state = initialState, { type, payload }) => {
  if (type === actions.LIST_STARTED) {
    return { ...state, listLoading: true };
  }
  if (type === actions.LIST_SUCCESS) {
    return { ...state, listLoading: false, rows: payload.rows };
  }
  if (type === actions.LIST_ERROR) {
    return { ...state, listLoading: false, record: [] };
  }
  return state;
};
