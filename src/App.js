import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/Main";
import Rules from "./components/Rules";
// import Schedule from "./components/Schedule";
// import Projects from "./components/Projects";
const Projects = lazy(() => import("./components/Projects/index"));
// import Contributors from "./components/Contributors";

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Main} />
          <Route path="/rules" component={Rules} />
          {/* <Route path="/contributors" component={Contributors} /> */}
          {/* <Route path="/schedule" component={Schedule} /> */}
          <Route path="/projects" component={Projects} />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
