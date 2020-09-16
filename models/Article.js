const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create article data
const ArticleSchema = new Schema({
  body: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  id: {
    required: true,
    type: Number,
  },
});

const Article = mongoose.model("articles", ArticleSchema);
module.exports = Article;
