/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSelector } from "reselect";
const selectRaw = (state) => state.contact.form;
const selectSaveLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.saveLoading)
);

const selectRecord = createSelector([selectRaw], (raw) => raw.record);
const initLoading = createSelector(
  [selectRaw],
  (loading) => loading.initLoading
);
const ContactSelectors = {
  selectSaveLoading,
  selectRecord,
  initLoading,
};
export default ContactSelectors;
