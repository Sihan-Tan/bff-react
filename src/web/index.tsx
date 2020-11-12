import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import routes from "@routes/index";
import { RecoilRoot } from "recoil";
import "@assets/styles/index.less";

ReactDOM.render(
  <RecoilRoot>
    <Router>
      <ul className="nav">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/user">user</Link>
        </li>
        <li>
          <Link to="/hooks">hooks</Link>
        </li>
        <li>
          <Link to="/index">index</Link>
        </li>
      </ul>
      {routes()}
    </Router>
  </RecoilRoot>,
  document.getElementById("root")
);
