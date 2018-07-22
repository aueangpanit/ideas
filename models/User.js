const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  googleId: String
});

mongoose.model("user", userSchema);
