import React from "react";
import { Route, useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
function PrivateRoutes({ component: Component, ...rest }) {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
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
