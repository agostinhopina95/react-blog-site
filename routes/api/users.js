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

// CREATE USER
router.post("/", async (req, res) => {
  const { name, email, street, city, image_url } = req.body;
  const address = [street, city];
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

// READ USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user.length == 0) {
      res.json({ err: `No User Exist with this id` });
    } else {
      res.json(user);
    }
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.json({ success: "User updated successfully!" });
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndRemove({ _id: req.params.id });
    res.json({ success: `User deleted successfully!` });
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

module.exports = router;
