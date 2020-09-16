const express = require("express");
const router = express.Router();

const Article = require("../../models/Article");

router.get("/", async (req, res) => {
  const article = await Article.find({});
  try {
    if (article.length == 0) {
      res.json({ err: `No Article Exist` });
    } else {
      res.json(article);
    }
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

// CREATE Article
router.post("/", async (req, res) => {
  const { body, title, id } = req.body;

  const newArticle = new Article({
    body,
    title,
    id,
  });

  try {
    const article = await newArticle.save();
    res.json(article);
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

// READ ARTICLE
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article.length == 0) {
      res.json({ err: `No Article Exist with this id` });
    } else {
      res.json(article);
    }
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

// UPDATE ARTICLE
router.put("/:id", async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.json({ success: "Article updated successfully!" });
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

// DELETE ARTICLE
router.delete("/:id", async (req, res) => {
  try {
    const article = await Article.findByIdAndRemove({ _id: req.params.id });
    res.json({ success: `Article deleted successfully!` });
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

module.exports = router;
