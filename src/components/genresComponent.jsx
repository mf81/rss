import React, { Component } from "react";

const Genres = props => {
  const {
    genres,
    onGenres,
    textProperty,
    valueProperty,
    selectedGenres
  } = props;
  return (
    <ul className="list-group">
      {genres.map(g => (
        <li
          className={
            selectedGenres._id === g._id
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          key={g[valueProperty]}
          onClick={() => onGenres(g)}
        >
          {g[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Genres.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Genres;
