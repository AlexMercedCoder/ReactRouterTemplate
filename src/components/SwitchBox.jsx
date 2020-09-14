import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Page2 from "./pages/Page2.jsx";

export const SwitchBox = (props) => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page">
          <Page2 />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </main>
  );
};
