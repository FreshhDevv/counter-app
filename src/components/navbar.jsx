import React from "react";
import { Component } from "react";

const NavBar = (props) => {
  return (
    <nav class="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span class="badge rounded-pill text-bg-secondary">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
