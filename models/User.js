const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  googleId: String
});

mongoose.model("User", userSchema);
