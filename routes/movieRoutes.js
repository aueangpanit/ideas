const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

const requireLogin = require("../middleware/requireLogin");
const requireMovieExist = require("../middleware/requireMovieExist");
const uploadMoviePoster = require("../middleware/uploadMoviePoster");

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
    const movie = await new Movie({
      title: req.body.title,
      releaseDate: req.body.releaseDate
    }).save();

    res.send({ movie });
  });

  app.post("/api/movie/update/info/:id", requireLogin, async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, {
      synopsis: req.body.synopsis
    });

    res.send({ movie });
  });

  app.post(
    "/api/movie/update/poster/:id",
    requireLogin,
    requireMovieExist,
    uploadMoviePoster.single("poster"),
    async (req, res) => {
      const movie = await Movie.findById(req.params.id);

      res.send({ movie });
    }
  );
};
