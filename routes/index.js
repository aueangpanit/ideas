var express = require('express');
var router = express.Router();

var passport = require('../config/passport');

var authenticationController = require('../controllers/authenticationController');

router.get('/', authenticationController.index_get); // Home Page
router.post('/login', authenticationController.index_login_post); // Login POST
router.post('/signup', authenticationController.index_signup_post); // signup POST
router.get('/profile', authenticationController.isLoggedIn, authenticationController.profile_get); // Profile GET
router.get('/logout', authenticationController.logout); // Logout GET
module.exports = router;