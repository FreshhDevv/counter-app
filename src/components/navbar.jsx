import React from "react";
import { Component } from "react";

const NavBar = ({totalCounters}) => {
  return (
    <nav class="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span class="badge rounded-pill text-bg-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
