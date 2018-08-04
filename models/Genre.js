const mongoose = require("mongoose");
const { Schema } = mongoose;

const genreSchema = new Schema({
  name: String
});

mongoose.model("Genre", genreSchema);
