import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Page2 from "./pages/Page2.jsx";

export const SwitchBox = (props) => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/page" element={<Page2 />}/>
      </Routes>
    </main>
  );
};
