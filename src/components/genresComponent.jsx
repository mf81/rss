import React, { Component } from "react";

class Genres extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.genres.map(g => (
          <li
            className="list-group-item"
            style={{ cursor: "pointer" }}
            key={g._id}
          >
            {g.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Genres;
