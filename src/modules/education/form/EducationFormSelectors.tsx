import { createSelector } from "reselect";
const selectRaw = (state) => state.education.form;
const saveLoading = createSelector(
  [selectRaw],
  (loading) => loading.saveLoading
);
const selectRecord = createSelector([selectRaw], (record) => record.record);
const initLoading = createSelector(
  [selectRaw],
  (loading) => loading.initLoading
);
const EducationFormSelectors = {
  saveLoading,
  selectRecord,
  initLoading,
};
export default EducationFormSelectors;
