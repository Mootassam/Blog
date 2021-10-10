import { createSelector } from "reselect";
const selectRaw = (state) => state.auth;

const LoadingUpdated = createSelector(
  [selectRaw],
  (loading) => loading.LoadingUpdated
);

const currentUser = createSelector([selectRaw], (user) => user.currentUser);
const authSelctors = {
  LoadingUpdated,
  currentUser,
};
export default authSelctors;
