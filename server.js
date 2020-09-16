const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const articles = require("./routes/api/articles");

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database connection
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/users", users);
app.use("/api/articles", articles);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
