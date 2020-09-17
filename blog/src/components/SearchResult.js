import React, { Component } from "react";

class SearchResult extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h3 className="mb-5">Search Result</h3>
        <div className="row articles">
          <div className="col-6 mb-4">
            <div className="card h-100">
              <h4 className="card-header">Card Title</h4>
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="card h-100">
              <h4 className="card-header">Card Title</h4>
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResult;
