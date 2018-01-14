var express = require('express');
var router = express.Router();

var listController = require('../controllers/listController');

router.get('/user', listController.user_lists_get); // GET user's list
module.exports = router;