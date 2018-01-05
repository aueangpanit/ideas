var express = require('express');
var router = express.Router();

var passport = require('../config/passport');

var authenticationController = require('../controllers/authenticationController');

router.get('/', authenticationController.index); // Home Page
router.get('/login', authenticationController.login_get); // Login GET
router.post('/login', authenticationController.login_post); // Login POST
router.get('/signup', authenticationController.signup_get); // Signup GET
router.post('/signup', authenticationController.signup_post); // signup POST
router.get('/profile', authenticationController.isLoggedIn, authenticationController.profile); // Profile GET
router.get('/logout', authenticationController.logout); // Logout GET

module.exports = router;