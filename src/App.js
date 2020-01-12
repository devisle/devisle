import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/Main";
import CLI from "./components/CLI";
import Reference from "./components/Reference";
import SimpleThunk from "./components/SimpleThunk";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Main} />
          <Route path="/cli" component={CLI} />
          <Route path="/reference" component={Reference} />
          <Route path="/simplethunk" component={SimpleThunk} />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
