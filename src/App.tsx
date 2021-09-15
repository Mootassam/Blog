import "./App.css";
import RoutesComponent from "./view/routes/RoutesComponent";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
