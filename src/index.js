import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";
import Settings from "./Components/Settings";

const routing = (
  /* Router added */
  <Router>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/signup" render={() => <Signup />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route path="/users" render={() => <Users />} />
        <Route path="/settings" render={() => <Settings />} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
