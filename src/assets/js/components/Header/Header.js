import React from "react";
import { NavLink } from "react-router-dom";
import User from "./User";

const Header = () => (
  <header className="header__container">
    <div className="header__logo">
      <h2>
        <NavLink exact
          to="/"
          className="header__heading"
          activeClassName="header__heading--active"
        >
          HTKR
        </NavLink>
      </h2>
    </div>
    <User />
  </header>
);

export default Header;
