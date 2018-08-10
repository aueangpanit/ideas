const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

const requireLogin = require("../middleware/requireLogin");

module.exports = app => {
  app.get("/api/movie/available/:title/:year", async (req, res) => {
    const movie = await Movie.findOne({
      title: req.params.title,
      releaseDate: {
        $gte: new Date(req.params.year, 1, 1),
        $lt: new Date(req.params.year, 12, 31)
      }
    });

    if (movie) {
      res.send({ available: false });
    } else {
      res.send({ available: true });
    }
  });

  app.post("/api/movie/new", requireLogin, async (req, res) => {
    console.log(req.body);
    const movie = await new Movie({
      title: req.body.title,
      releaseDate: req.body.releaseDate
    }).save();

    res.send({ movie });
  });
};
