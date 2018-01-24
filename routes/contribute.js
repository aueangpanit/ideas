var express = require('express');
var router = express.Router();

var authenticationController = require('../controllers/authenticationController');
var contributeController = require('../controllers/contributeController');

router.get('/addmovie', authenticationController.isLoggedIn, contributeController.add_movie_get); // GET add movie
router.post('/addmovie', contributeController.add_movie_post); // POST add movie

module.exports = router;