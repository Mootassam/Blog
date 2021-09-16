import "./App.css";
import RoutesComponent from "./view/routes/RoutesComponent";
import { BrowserRouter } from "react-router-dom";
import jQuery from "jquery";

import "bootstrap/dist/js/bootstrap";

(window as any).$ = (window as any).jQuery = jQuery;
function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
