import { createSelector } from "reselect";
const selectRaw = (state) => state.auth;

const LoadingUpdated = createSelector(
  [selectRaw],
  (loading) => loading.LoadingUpdated
);

const selectErrorMessage = createSelector(
  [selectRaw],
  (auth) => auth.errorMessage
);
const currentUser = createSelector([selectRaw], (user) => user.currentUser);
const authSelctors = {
  LoadingUpdated,
  currentUser,
  selectErrorMessage,
};
export default authSelctors;
