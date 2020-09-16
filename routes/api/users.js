const express = require("express");
const router = express.Router();

const User = require("../../models/User");

router.get("/", async (req, res) => {
  const user = await User.find({});
  try {
    if (user.length == 0) {
      res.json({ err: `No User Exist` });
    } else {
      res.json(user);
    }
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

router.post("/", async (req, res) => {
  const { name, email, address, image_url } = req.body;

  const newUser = new User({
    name,
    email,
    address,
    image_url,
  });

  try {
    const user = await newUser.save();
    res.json(user);
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

module.exports = router;
