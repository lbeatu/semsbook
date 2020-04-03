import React, { useState } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Write from "./components/Write";

import NotFound from "./components/Notfound";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/semsbook" component={Write} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
