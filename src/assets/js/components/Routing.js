import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Routes/Home";
import HikesList from "./Routes/HikesList";
import NewHike from "./Routes/NewHike";
import NoMatch from "./Routes/NoMatch";

const Router = () => (
  <div className="app__container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/my-hikes" component={HikesList} />
      <Route path="/new-hike" component={NewHike} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Router;
