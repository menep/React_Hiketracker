import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Header from "./components/Header/Header";
import "./styles/main.scss";
import Content from "./components/Content/Content";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default hot(module)(App);
