import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="main-navbar">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i class="logo fa fa-adn"></i> Article Blog
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
