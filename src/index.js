import react from "react";
import ReactDOM from "react-dom/client";
import Game from "./components/Game";
import "./style.css";

let reactRoot = ReactDOM.createRoot(document.getElementById("root"));

function Hello() {
  return <h1>Hello World</h1>;
}

reactRoot.render(<Game />);
