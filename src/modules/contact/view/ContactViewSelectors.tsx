import { createSelector } from "reselect";
const selectRaw = (state) => state.contact.view;

const viewLoading = createSelector(
  [selectRaw],
  (loading) => loading.findLoading
);

const SelectData = createSelector([selectRaw], (data) => data.data);

const ContactViewSelectors = {
  viewLoading,
  SelectData,
};
export default ContactViewSelectors;
