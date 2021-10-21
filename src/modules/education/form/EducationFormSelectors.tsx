import { createSelector } from "reselect";
const selectRaw = (state) => state.education.form;
const saveLoading = createSelector(
  [selectRaw],
  (loading) => loading.saveLoading
);
const EducationFormSelectors = {
  saveLoading,
};
export default EducationFormSelectors;
