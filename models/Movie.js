const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  name: String,
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }]
});

mongoose.model("Movie", movieSchema);
