var express = require('express');
var router = express.Router();

var mediaController = require('../controllers/mediaController');

router.get('/movie', mediaController.movie_get); // movie info GET

module.exports = router;