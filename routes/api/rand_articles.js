const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => {
  res.json({ success: "This is it" });
});

// POST
router.post("/", (req, res) => {
  res.json({ success: "This is it" });
});

module.exports = router;
