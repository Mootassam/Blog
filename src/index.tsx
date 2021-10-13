import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";


(async function () {
  const App = require("./App").default;
  document.title = "Build Your Resume";
  ReactDOM.render(<App />, document.getElementById("root"));
})();
