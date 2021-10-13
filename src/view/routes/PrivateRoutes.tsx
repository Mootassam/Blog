import PermissionChecker from "src/modules/auth/permissionChecker";
import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import Layout from "src/view/layout/Layout";

function PrivateRoute({
  component: Component,
  currentTenant,
  currentUser,
  ...rest
}) {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(
          currentTenant,
          currentUser
        );

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

export default PrivateRoute;
