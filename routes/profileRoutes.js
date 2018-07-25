const mongoose = require("mongoose");
const User = mongoose.model("user");

const requireLogin = require("../middleware/requireLogin");
const requireUniqueUsername = require("../middleware/requireUniqueUsername");

module.exports = app => {
  app.post(
    "/api/profile/update/username",
    requireLogin,
    requireUniqueUsername,
    async (req, res) => {
      const user = await User.findOne({ googleId: req.user.googleId });
      user.set({ username: req.body.username });
      const modifiedUser = await user.save();

      res.send(modifiedUser);
    }
  );

  app.get("/api/profile/is_username_avaliable/:username", async (req, res) => {
    const user = await User.findOne({ username: req.params.username });
    if (user) {
      res.send({ available: false });
    } else {
      res.send({ available: true });
    }
  });
};
