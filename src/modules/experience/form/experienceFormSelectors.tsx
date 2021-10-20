import { create } from "lodash";
import { createSelector } from "reselect";
const selectRaw = (state) => state.experience.form;
const saveLoading = createSelector([selectRaw], (loading) =>
  Boolean(loading.loadingSave)
);

const selectRecord = createSelector([selectRaw], (record) => record.record);
const initLoading = createSelector(
  [selectRaw],
  (loading) => loading.initLoading
);

const experienceFormSelector = {
  saveLoading,
  selectRecord,
  initLoading,
};
export default experienceFormSelector;
