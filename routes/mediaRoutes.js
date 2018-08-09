const mongoose = require("mongoose");
const Genre = mongoose.model("Genre");

const PAGE_SIZE = 10;

module.exports = app => {
  app.post("/api/genre/new", async (req, res) => {
    const existingGenre = await Genre.findOne({ name: req.body.genre });

    if (existingGenre) {
      res.status(409).send({ error: "This genre already exists." });
    } else {
      const genre = new Genre({
        name: req.body.genre
      });
      await genre.save();

      res.send(req.user);
    }
  });

  app.get("/api/genre/available/:genre", async (req, res) => {
    const genre = await Genre.findOne({ name: req.params.genre });

    if (genre) {
      res.send({ available: false });
    } else {
      res.send({ available: true });
    }
  });

  app.get("/api/genre/", async (req, res) => {
    const genres = await Genre.find().limit(PAGE_SIZE);

    const last_id = genres[genres.length - 1].id;

    res.send({ genres, last_id });
  });

  app.get("/api/genre/:last_id", async (req, res) => {
    const genres = await Genre.find({ _id: { $gt: req.params.last_id } }).limit(
      PAGE_SIZE
    );

    if (genres.length) {
      const last_id = genres[genres.length - 1].id;
      res.send({ genres, last_id });
    } else {
      res.send({ genres, last_id: req.params.last_id });
    }
  });
};
