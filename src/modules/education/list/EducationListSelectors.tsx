import { createSelector } from "reselect";
const selectRaw = (state) => state.education.list;
const selectRows = createSelector([selectRaw], (record) => record.rows);
const EducationListSelectors = {
  selectRows,
};
export default EducationListSelectors;
