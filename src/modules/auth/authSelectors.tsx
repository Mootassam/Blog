import { createSelector } from "reselect";
const selectRaw = (state) => state.auth;

const selectLoadingInit = createSelector([selectRaw], (auth) =>
  Boolean(auth.loadingInit)
);

const LoadingUpdated = createSelector(
  [selectRaw],
  (loading) => loading.LoadingUpdated
);

const selectErrorMessage = createSelector(
  [selectRaw],
  (auth) => auth.errorMessage
);
const currentTenant = createSelector(
  [selectRaw],
  (teanant) => teanant.currentTenant
);
const currentUser = createSelector([selectRaw], (user) => user.currentUser);
const authSelctors = {
  LoadingUpdated,
  currentUser,
  selectErrorMessage,
  selectLoadingInit,
  currentTenant,
};
export default authSelctors;
