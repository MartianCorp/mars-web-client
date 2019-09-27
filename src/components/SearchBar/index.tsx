import React from "react";
import './styles.scss';

export const SearchBar = () => (
  <div className="c-search-bar">
    <input
      type="text"
      className="c-search-bar__input"
      placeholder="Skill (e.g. React, Scala)"
    />
    <input
      type="text"
      className="c-search-bar__input"
      placeholder="Location (e.g. London)"
    />
    <a className="c-search-bar__btn" href="#postings">Go!</a>
  </div>
);
