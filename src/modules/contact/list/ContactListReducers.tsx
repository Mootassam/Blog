import actions from "src/modules/contact/list/ContactListActions";
const INITIAL_PAGE_SIZE = 10;
const initialData = {
  rows: [] as Array<any>,
  count: 0,
  loading: false,
  filter: {},
  rawFilter: {},
  pagination: {
    current: 1,
    pageSize: INITIAL_PAGE_SIZE,
  },
  sorter: {},
  selectedKeys: [] as Array<string>,
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.LIST_STARTED) {
    return {
      ...state,
      loading: true,
      selectedKeys: [],
      filter: payload ? payload.filter : {},
      rawFilter: payload ? payload.rawFilter : {},
      pagination:
        payload && payload.keepPagination
          ? state.pagination
          : {
              current: 1,
              pageSize: INITIAL_PAGE_SIZE,
            },
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
