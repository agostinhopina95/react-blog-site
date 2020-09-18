const express = require("express");
const router = express.Router();

// POST
router.post("/", (req, res) => {
  /*axios.get("/api/users/").then((res) => {
    if (res.status === 200) {
      res.data
    } else {
      console.log("Something went wrong");
    }
  });
  const data = {
    articles: {
      id: "2",
      title: "Title 2",
      body: "Body 2",
    },
    users: {
      name: "Name  2",
      email: "Email 2",
      street: "Street 2",
      city: "City 2",
      image_url: "Image 2",
    },
  };
  axios.post("/api/articles/", data.articles).then((res) => {
    if (res.status !== 200) {
      console.log("Something went wrong");
    }
  });
  axios.post("/api/users/", data.users).then((res) => {
    if (res.status !== 200) {
      console.log("Something went wrong");
    }
  });*/
});

module.exports = router;
