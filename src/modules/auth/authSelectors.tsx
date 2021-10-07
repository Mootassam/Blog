import { createSelector } from "reselect";
const selectRaw = (state) => state.auth;

const LoadingUpdated = createSelector(
  [selectRaw],
  (loading) => loading.LoadingUpdated
);
const authSelctors = {
  LoadingUpdated,
};
export default authSelctors;
