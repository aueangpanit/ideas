var express = require('express');
var router = express.Router();

var user_authentication_controller = require('../controllers/userAuthenticationController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', user_authentication_controller.user_login_get);

router.post('/login', user_authentication_controller.user_login_post);

router.get('/signup', user_authentication_controller.user_signup_get);

router.post('/signup', user_authentication_controller.user_signup_post);

module.exports = router;
