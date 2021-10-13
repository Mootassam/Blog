import React, { useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "src/view/router";
import PrivateRoutes from "src/view/routes/PrivateRoutes";
import CustomLoadable from "../shared/CustomLoadable";
import PublicRoutes from "./PublicRoutes";
import selectors from "src/modules/auth/authSelectors";
import { useSelector } from "react-redux";
import ProgressBar from "../shared/ProgressBar";
function RoutesComponent(props) {
  const isInitialMount = useRef(true);
  const authLoading = useSelector(selectors.selectLoadingInit);
  const currentUser = useSelector(selectors.currentUser);
  const currentTenant = useSelector(selectors.currentTenant);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      ProgressBar.start();
      return;
    }
    if (!authLoading) {
      ProgressBar.done();
    }
  }, [authLoading]);
  if (authLoading) {
    return <div />;
  }
  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoutes
          key={route.path}
          exact
          path={route.path}
          currentTenant={currentTenant}
          currentUser={currentUser}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
      {routes.privateRoutes.map((route) => (
        <PrivateRoutes
          key={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
          exact={Boolean(route.exact)}
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
