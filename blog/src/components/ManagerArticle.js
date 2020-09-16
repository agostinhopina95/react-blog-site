import React, { Component } from "react";

class ManagerArticle extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm show-div">
            <h3 className="mb-3">Update Article</h3>
            <form className="">
              <fieldset>
                <div className="form-group">
                  <input
                    type="text"
                    id="TextInputArticle"
                    className="form-control"
                    placeholder="Article Id"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    id="TextInputTitle"
                    placeholder="Title"
                  />
                </div>
                <textarea
                  className="form-control mb-3"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="body"
                ></textarea>
                <button
                  type="submit"
                  className="btn w-100 btn-warning text-light"
                >
                  Update Article
                </button>
              </fieldset>
            </form>
          </div>
          <div className="col-sm">
            <div className="btn-operation">
              <button class="btn btn-primary w-100 text-light d-block mb-3">
                Create Random Articles and Authors
              </button>
              <button class="btn btn-danger w-100 text-light d-block mb-5">
                Delete All Articles and Authors
              </button>
            </div>

            <div className="btn-search">
              <form className="">
                <input
                  className="form-control mb-3"
                  type="text"
                  id="TextInputSearch"
                  placeholder="Search by Article Title..."
                />
                <button className="btn w-100 btn-success text-light">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerArticle;
