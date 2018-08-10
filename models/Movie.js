const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: { type: String, required: true },
  synopsis: { type: String, max: 2000 },
  releaseDate: { type: Date, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }]
});

mongoose.model("Movie", movieSchema);
