import React from "react";
import { SearchBar } from '../SearchBar';
import "./styles.scss";

interface HeroComponent { }

export const Hero: React.FC<HeroComponent> = () => (
  <div className="c-hero c-container">
    <h2 className="c-hero__title">17 jobs Live</h2>
    <SearchBar />
  </div>
);
