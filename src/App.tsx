import { ConnectedRouter } from "connected-react-router";
import { configureStore, getHistory } from "src/modules/store";
import React from "react";
import { Provider } from "react-redux";
import RoutesComponent from "src/view/routes/RoutesComponent";
import jQuery from "jquery";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

(window as any).$ = (window as any).jQuery = jQuery;

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
