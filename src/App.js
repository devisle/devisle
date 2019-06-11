import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Rules from "./components/Rules";
import Schedule from "./components/Schedule";
import Projects from "./components/Projects";
import Contributors from "./components/Contributors";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Route exact path="/devisle" component={Main} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/contributors" component={Contributors} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/projects" component={Projects} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
