const db = {
  user: "user_admin",
  pass: "pass123456",
  name: "reactBlog",
};

module.exports = {
  mongoURI:
    "mongodb+srv://" +
    db.user +
    ":" +
    db.pass +
    "@cluster0.lvkhm.mongodb.net/" +
    db.name +
    "?retryWrites=true&w=majority",
};
