import React from "react";
import { Route, useLocation, Redirect } from "react-router-dom";
import Layout from "../layout/Layout";
import PermissionChecker from "src/modules/auth/permissionChecker";
function PrivateRoutes({ component: Component, currentUser, ...rest }) {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(currentUser);
        if (!permissionChecker.isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/auth/signin",
                state: { from: location },
              }}
            />
          );
        }
        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

export default PrivateRoutes;
