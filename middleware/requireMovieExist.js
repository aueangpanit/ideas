const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

module.exports = async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  if (movie) {
    next();
  } else {
    res
      .status(404)
      .send({ error: "The movie that you're editing does not exist." });
  }
};
