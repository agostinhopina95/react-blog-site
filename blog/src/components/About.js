import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h1>Bottom Navbar example</h1>
          <p className="lead">
            This example is a quick exercise to illustrate how the bottom navbar
            works.
          </p>
          <a
            className="btn btn-lg btn-primary"
            href="../../components/navbar/"
            role="button"
          >
            View navbar docs &raquo;
          </a>
        </div>
      </div>
    );
  }
}
export default About;
