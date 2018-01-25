var express = require('express');
var router = express.Router();

//var passport = require('../config/passport');

var authenticationController = require('../controllers/authenticationController');

router.get('/', authenticationController.index_get); // Home Page
router.post('/index-login', authenticationController.index_login_post); // Index Login POST
router.post('/index-signup', authenticationController.index_signup_post); // Index Signup POST
router.get('/login', authenticationController.login_get) // Login GET
router.post('/login', authenticationController.login_post) // Login POST
router.get('/signup', authenticationController.signup_get) // Signup GET
router.post('/signup', authenticationController.signup_post) // Signup POST
router.get('/profile', authenticationController.isLoggedIn, authenticationController.profile_get); // Profile GET
router.get('/logout', authenticationController.logout); // Logout GET

module.exports = router;