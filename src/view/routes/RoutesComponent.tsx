import { keyBy } from "lodash";
import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "src/view/router";
import PrivateRoutes from "src/view/routes/PrivateRoutes";
import CustomLoadable from "../shared/CustomLoadable";
function RoutesComponent(props) {
  return (
    <Switch>
      {routes.privateRoutes.map((route) => (
        <PrivateRoutes
          exact
          key={route.path}
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
      {routes.simpleRoutes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponent;
