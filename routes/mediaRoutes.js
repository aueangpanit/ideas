const mongoose = require("mongoose");
const Genre = mongoose.model("Genre");

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
};
