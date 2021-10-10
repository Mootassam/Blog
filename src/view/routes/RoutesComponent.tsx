import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "src/view/router";
import PrivateRoutes from "src/view/routes/PrivateRoutes";
import CustomLoadable from "../shared/CustomLoadable";
import PublicRoutes from "./PublicRoutes";
import selectors from "src/modules/auth/authSelectors";
import { useSelector } from "react-redux";
function RoutesComponent(props) {
  const currentUser = useSelector(selectors.currentUser);
  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoutes
          exact
          key={route.path}
          path={route.path}
          currentUser={currentUser}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
      {routes.privateRoutes.map((route) => (
        <PrivateRoutes
          exact
          key={route.path}
          path={route.path}
          currentUser={currentUser}
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
