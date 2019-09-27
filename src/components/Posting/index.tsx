import React from "react";
import { IPostingProps } from '../../interfaces/IPostingProps';
import "./styles.scss";

export const Posting: React.FC<IPostingProps> = ({ id, title, company, salary }) => {
  if (title && company && salary) {
    return (
      <article className="c-card" data-id={id}>
        <h3 className="c-card__title">{title}</h3>
        <p className="c-card__description">{company}</p>
        <p>{salary}</p>
      </article>
    );
  }
  return null;
};
