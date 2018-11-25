import React from "react";
import { NavLink } from "react-router-dom";

const User = props => (
  <ul className="user__container">
    {/* <li className="user__auth-btn">
    </li>
    <li className="user__auth-btn">Sign Up</li> */}
    <li className="user__auth-btn">
      <NavLink
        to="/my-hikes"
        className="user__auth-btn--inactive"
        activeClassName="user__auth-btn--active"
      >
        My Hikes
      </NavLink>
    </li>
  </ul>
);

export default User;
