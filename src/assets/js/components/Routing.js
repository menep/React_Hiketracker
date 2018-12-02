import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Routes/LandingPage";
import HikesList from "./Routes/HikesList";
import NewHike from "./Routes/NewHike";
import NoMatch from "./Routes/NoMatch";

const Routing = () => (
  <div className="app__container">
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/my-hikes" component={HikesList} />
      <Route path="/new-hike" component={NewHike} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Routing;
