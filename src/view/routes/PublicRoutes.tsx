import { Route, Redirect } from "react-router-dom";
import PermissionChecker from "src/modules/auth/permissionChecker";
function PublicRoutes({ component: Component, currentUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(currentUser);

        if (permissionChecker.isAuthenticated) {
          return <Redirect to='/' />;
        }

        return <Component {...props} />;
      }}
    />
  );
}
export default PublicRoutes;
