import React, { Component } from "react";
class SearchResult extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h3 className="mb-5">Search Result</h3>
        <div className="row api-selector articles"></div>
      </div>
    );
  }
}

export default SearchResult;
