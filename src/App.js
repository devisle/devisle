import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/Main";
import Reference from "./components/Reference";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={Main} />
        <Route path="/reference" component={Reference} />
      </Suspense>
    </Router>
  );
};

export default App;
