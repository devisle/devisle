import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/Main";
import Rules from "./components/Rules";
import Schedule from "./components/Schedule";
import Projects from "./components/Projects";
import Contributors from "./components/Contributors";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route path="/rules" component={Rules} />
        <Route path="/contributors" component={Contributors} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
