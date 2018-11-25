import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Header from "./components/Header/Header";
import "../styles/main.scss";
import Routing from "./components/Routing";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routing />
      </div>
    );
  }
}

export default hot(module)(App);
