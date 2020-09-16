import React, { Component } from "react";

class SearchResult extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="mb-5">Search Result</h3>
        <div className="row">
          <div className="col-6 mb-5">
            <div className="card">
              <img
                className="card-img-top"
                src="1/logo192.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 mb-5">
            <div className="card">
              <img
                className="card-img-top"
                src="1/logo192.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 mb-5">
            <div className="card">
              <img
                className="card-img-top"
                src="1/logo192.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
