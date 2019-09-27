import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

export default () => {
  return (
    <header className="c-header">
      <Link to="/" className="c-header__logo">
        LOGO
      </Link>
      <nav className="c-header__nav">
        <ul className="c-header__list">
          <li className="c-header__list-item">
            <Link to="/register">Sign up</Link>
          </li>
          <li className="c-header__list-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
