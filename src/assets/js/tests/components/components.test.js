import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Header from "../../components/Header/Header";
import User from "../../components/Header/User";

test("User renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <User />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Header renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
