import React from "react";
import User from "../User/User";
import { NavLink } from "react-router-dom";

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
