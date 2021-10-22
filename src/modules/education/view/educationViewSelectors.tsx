import { createSelector } from "reselect";

const selectRaw = (state) => state.education.view;
const selectRecord = createSelector([selectRaw], (record) => record.record);
const selectLoading = createSelector(
  [selectRaw],
  (loading) => loading.findLoading
);
const educationViewSelectors = {
  selectRecord,
  selectLoading,
};
export default educationViewSelectors;
