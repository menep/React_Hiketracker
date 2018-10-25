import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import HikesList from "../HikesList/HikesList";
import NewHike from "../NewHike/NewHike";

const Content = () => (
  <div className="app__container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/my-hikes" component={HikesList} />
      <Route path="/new-hike" component={NewHike} />
    </Switch>
  </div>
);

export default Content;
