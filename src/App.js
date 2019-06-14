import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";

import Main from "./components/Main";
import Rules from "./components/Rules";
import Schedule from "./components/Schedule";
import Projects from "./components/Projects";
import Contributors from "./components/Contributors";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route path="/rules" component={Rules} />
        <Route path="/contributors" component={Contributors} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/projects" component={Projects} />
      </div>
    </HashRouter>
  );
}

export default App;
