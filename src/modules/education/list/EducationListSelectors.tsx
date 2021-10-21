import { createSelector } from "reselect";
const selectRaw = (state) => state.education.list;
const selectRows = createSelector([selectRaw], (record) => record.rows);

const listLoading = createSelector(
  [selectRaw],
  (loading) => loading.listLoading
);

const EducationListSelectors = {
  selectRows,
  listLoading,
};
export default EducationListSelectors;
