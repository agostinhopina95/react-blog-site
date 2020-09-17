import React, { Component } from "react";
import axios from "axios";

class ManagerArticle extends Component {
  constructor(props) {
    super(props);
    this.ev_update_article = this.ev_update_article.bind(this);
    this.ev_create_rand_article = this.ev_create_rand_article.bind(this);
    this.ev_delete_all_article = this.ev_delete_all_article.bind(this);
    this.ev_search_article = this.ev_search_article.bind(this);

    this.state = {
      articleID: "",
      title: "",
      body: "",
      search: "",
    };
  }

  // UPDATE BY ID...
  ev_update_article(e) {
    e.preventDefault();
    axios
      .put("/api/articles/" + "5f6382d18fb26237d09654bb", {
        id: "77" + this.state.articleID,
        title: this.state.title,
        body: this.state.body,
      })
      .then((res) => {
        if (res.status !== 200) {
          console.log("Something went wrong");
        }
      });
  }

  ev_create_rand_article(e) {
    e.preventDefault();

    const arrArticles = [
      [
        {
          id: "1",
          title: "Title 1",
          body: "Body 1",
        },
        {
          name: "Name  1",
          email: "Email 1",
          street: "Street 1",
          city: "City 1",
          image_url: "Image 1",
        },
      ],
      [
        {
          id: "2",
          title: "Title 2",
          body: "Body 2",
        },
        {
          name: "Name  2",
          email: "Email 2",
          street: "Street 2",
          city: "City 2",
          image_url: "Image 2",
        },
      ],
      [
        {
          id: "3",
          title: "Title 3",
          body: "Body 3",
        },
        {
          name: "Name  3",
          email: "Email 3",
          street: "Street 3",
          city: "City 3",
          image_url: "Image 3",
        },
      ],
    ];
    arrArticles.forEach(function (group) {
      axios.post("/api/articles/", group[0]).then((res) => {
        if (res.status !== 200) {
          console.log("Something went wrong");
        }
      });
      axios.post("/api/users/", group[1]).then((res) => {
        if (res.status !== 200) {
          console.log("Something went wrong");
        }
      });
    });
  }
  ev_delete_all_article(e) {
    e.preventDefault();
    axios.get("/api/users/").then((res) => {
      if (res.status === 200) {
        res.data.forEach(function (val) {
          axios.delete("/api/users/" + val._id).then((r) => {
            if (r.status !== 200) {
              console.log({ error: "error" });
            }
          });
        });
      } else {
        console.log({ error: "error" });
      }
    });
    axios.get("/api/articles/").then((res) => {
      if (res.status === 200) {
        res.data.forEach(function (val) {
          axios.delete("/api/articles/" + val._id).then((r) => {
            if (r.status !== 200) {
              console.log({ error: "error" });
            }
          });
        });
      } else {
        console.log({ error: "error" });
      }
    });
  }
  ev_search_article(e) {
    e.preventDefault();
    const search = this.state.search.toLowerCase();
    axios.get("/api/articles/").then((res) => {
      if (res.status === 200) {
        res.data.forEach(function (item) {
          const str_search = item.title.toLowerCase().trim();
          if (str_search.search(search) > -1) {
            axios.get("/api/articles/" + item._id).then((res) => {
              if (res.status === 200) {
                console.log(res.data);
              } else {
                console.log("Something went wrong");
              }
            });
          }
        });
      } else {
        console.log({ error: "error" });
      }
    });
  }

  handleChangeArticleIDState = (event) => {
    this.setState({
      articleID: event.target.value,
    });
  };
  handleChangeTitleState = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeBodyState = (event) => {
    this.setState({
      body: event.target.value,
    });
  };
  handleSearchState = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm show-div">
            <h3 className="mb-3">Update Article</h3>
            <form onSubmit={this.ev_update_article} className="">
              <fieldset>
                <div className="form-group">
                  <input
                    type="text"
                    onChange={this.handleChangeArticleIDState}
                    className="form-control"
                    placeholder="Article Id"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    onChange={this.handleChangeTitleState}
                    placeholder="Title"
                  />
                </div>
                <textarea
                  className="form-control mb-3"
                  name="body"
                  onChange={this.handleChangeBodyState}
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
              <button
                onClick={this.ev_create_rand_article}
                className="btn btn-primary w-100 text-light d-block mb-3"
              >
                Create Random Articles and Authors
              </button>
              <button
                onClick={this.ev_delete_all_article}
                className="btn btn-danger w-100 text-light d-block mb-5"
              >
                Delete All Articles and Authors
              </button>
            </div>

            <div className="btn-search">
              <form className="">
                <input
                  className="form-control mb-3"
                  type="text"
                  onChange={this.handleSearchState}
                  placeholder="Search by Article Title..."
                />
                <button
                  onClick={this.ev_search_article}
                  className="btn w-100 btn-success text-light"
                >
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
