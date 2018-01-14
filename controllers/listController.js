var User = require('../models/user');
var passport = require('../config/passport');

//var async = require('async');

//const { body,validationResult } = require('express-validator/check');
//const { sanitizeBody } = require('express-validator/filter');

// Logout
exports.user_lists_get = function(req, res) {
    res.render('pages/user-lists.ejs', {
        user_id: req.query.id
    });
};


