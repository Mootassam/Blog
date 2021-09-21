import { createSelector } from "reselect";

const selectRaw = (state) => state.contact.list;

const selectOrderBy = createSelector([selectRaw], (raw) => {
  const sorter = raw.sorter;
  if (!sorter) {
    return null;
  }
  if (!sorter.field) {
    return null;
  }
  let direction = sorter.order === "descend" ? "DESC" : "ASC";
  return `${sorter.field}_${direction}`;
});

const selectLimit = createSelector([selectRaw], (raw) => {
  const pagination = raw.pagination;
  return pagination.pageSize;
});
const selectOffset = createSelector([selectRaw], (raw) => {
  const pagination = raw.pagination;

  if (!pagination || !pagination.pageSize) {
    return 0;
  }

  const current = pagination.current || 1;

  return (current - 1) * pagination.pageSize;
});

const ContactListSelectors = {
  selectOrderBy,
  selectLimit,
  selectOffset,
};
export default ContactListSelectors;
