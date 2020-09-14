import React from "react";
import { Link } from "react-router-dom";

export const Nav = (props) => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/page">Page2</Link>
      </div>
    </nav>
  );
};
