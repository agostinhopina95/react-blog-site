const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create user data
const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  address: {
    required: false,
    type: String,
  },
  image_url: {
    required: false,
    type: String,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
