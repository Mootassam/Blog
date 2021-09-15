import React from "react";
import { Route, useLocation } from "react-router-dom";
function PrivateRoutes({ component: Component, ...rest }) {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <Component {...props} />
          </>
        );
      }}
    />
  );
}

export default PrivateRoutes;
