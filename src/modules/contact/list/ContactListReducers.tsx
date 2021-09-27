import actions from "src/modules/contact/list/ContactListActions";
const INITIAL_PAGE_SIZE = 10;
const initialData = {
  rows: [] as Array<any>,
  count: 0,
  loading: false,
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.LIST_STARTED) {
    return {
      ...state,
      loading: true,
    };
  }
  if (type === actions.LIST_SUCCESS) {
    return {
      ...state,
      loading: false,
      rows: payload.rows,
      count: payload.count,
    };
  }
  if (type === actions.LIST_ERROR) {
    return { ...state, loading: false, rows: [], count: 0 };
  }
};
