import { ConnectedRouter } from "connected-react-router";
import { configureStore, getHistory } from "src/modules/store";

import { Provider } from "react-redux";
import RoutesComponent from "src/view/routes/RoutesComponent";
import jQuery from "jquery";
import "bootstrap/js/src";
(window as any).$ = (window as any).jQuery = jQuery;

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <RoutesComponent />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
