const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    res.status(409).send({
      error: "This username already exist, please choose a different one."
    });
  } else {
    next();
  }
};
