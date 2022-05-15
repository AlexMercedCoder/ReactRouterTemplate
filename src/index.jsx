import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { Nav } from "./components/Nav.jsx";
import { SwitchBox } from "./components/SwitchBox.jsx";
import { createRoot } from "react-dom/client";

import "./styles.scss";

const App = (props) => {
  return (
    <Router>
      <h1>The Page Header</h1>
      <Nav />
      <SwitchBox />
    </Router>
  );
};

//append app to root div
const root = createRoot(document.querySelector("#root"));
root.render(<App />)