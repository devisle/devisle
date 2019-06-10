import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/main/main";
import Rules from "./components/DevIsleRules/DevIsleRules";
import Schedule from "./components/Schedule/Schedule";
import Projects from "./components/Projects/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
