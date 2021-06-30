import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";

import routes from "./routes";
import Login from "./login";

export default function Pages() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route path={path} exact component={component} key={path} />
        ))}
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}
