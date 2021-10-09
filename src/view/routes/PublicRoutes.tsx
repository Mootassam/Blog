import React from "react";
import { Route } from "react-router-dom";

function PublicRoutes({ component: Component, ...reset }) {
  return (
    <Route
      {...reset}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
}
export default PublicRoutes;
