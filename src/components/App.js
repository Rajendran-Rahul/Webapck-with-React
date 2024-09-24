import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import DynamicPage from "./DynamicPage";
import NoMatch from "./NoMatch";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/dynamic" Component={DynamicPage} />
          <Route component={NoMatch} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
