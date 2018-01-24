var express = require('express');
var router = express.Router();

var authenticationController = require('../controllers/authenticationController');

var listController = require('../controllers/listController');

router.get('/user', authenticationController.isLoggedIn, listController.user_lists_get); // GET user's list
module.exports = router;