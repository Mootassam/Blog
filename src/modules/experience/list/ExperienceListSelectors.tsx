import { createSelector } from "reselect";
const selectRaw = (state) => state.experience.list;
const rows = createSelector([selectRaw], (list) => list.rows);
const ListLoading = createSelector(
  [selectRaw],
  (loading) => loading.ListLoading
);
const ExperienceListSelectors = {
  rows,
  ListLoading,
};
export default ExperienceListSelectors;
