import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Main from "./components/main/main";
import Rules from "./components/DevIsleRules/DevIsleRules";
import Schedule from "./components/Schedule/Schedule";
import Projects from "./components/Projects/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <img
            src="https://avatars3.githubusercontent.com/u/48589214?s=200&v=4"
            width="75"
            height="75"
            alt="Dev Isle"
          />
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ color: "#65e0ff" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/rules" activeStyle={{ color: "#65e0ff" }}>
                Rules
              </NavLink>
            </li>
            <li>
              <NavLink to="/schedule" activeStyle={{ color: "#65e0ff" }}>
                Schedule
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeStyle={{ color: "#65e0ff" }}>
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Main} />
        <Route path="/rules" component={Rules} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
