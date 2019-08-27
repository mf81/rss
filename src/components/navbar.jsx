import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="http://localhost:3000">
        RSS
      </a>
      <span className="badge badge-pill badge-secondary">
        <span>Ilość: </span>
        {totalCounters}
      </span>
    </nav>
  );
};

export default NavBar;
