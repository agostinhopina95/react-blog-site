import React, { Component } from "react";

class SearchResult extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h3 className="mb-5">Search Result</h3>
        <div className="row articles">
          <div className="col-6 mb-4">
            <div class="card h-100">
              <h4 class="card-header">Card Title</h4>
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div class="card h-100">
              <h4 class="card-header">Card Title</h4>
              <div class="card-body">
                <p class="card-text">
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
