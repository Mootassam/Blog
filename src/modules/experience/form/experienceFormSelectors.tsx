import { create } from "lodash";
import { createSelector } from "reselect";
const selectRaw = (state) => state.experience.form;
const saveLoading = createSelector([selectRaw], (loading) =>
  Boolean(loading.loadingSave)
);
const experienceFormSelector = {
  saveLoading,
};
export default experienceFormSelector;
