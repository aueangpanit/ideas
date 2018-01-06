var express = require('express');
var router = express.Router();

var passport = require('../config/passport');

var authenticationController = require('../controllers/authenticationController');

router.get('/', authenticationController.index); // Home Page
router.post('/login', authenticationController.index_login_post); // Login POST
router.post('/signup', authenticationController.index_signup_post); // signup POST
router.get('/profile', authenticationController.isLoggedIn, authenticationController.profile); // Profile GET
router.get('/logout', authenticationController.logout); // Logout GET
module.exports = router;