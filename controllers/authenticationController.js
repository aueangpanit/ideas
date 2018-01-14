var User = require('../models/user');
var passport = require('../config/passport');

//var async = require('async');

//const { body,validationResult } = require('express-validator/check');
//const { sanitizeBody } = require('express-validator/filter');

// Render home page
exports.index_get = function(req, res) {
    var loggedIn = req.isAuthenticated() ? true : false;

    console.log(loggedIn);

    res.render('pages/index.ejs', { 
        signup_message: req.flash('signupMessage'), 
        login_message: req.flash('loginMessage'),
        logged_in: loggedIn
    });
};

exports.index_login_post = passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the login page if there is an error
    failureFlash : true // allow flash messages
});

// Process signup form
exports.index_signup_post = passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the login page if there is an error
    failureFlash : true // allow flash messages
});

// Render profile page
exports.profile_get = function(req, res) {
    var loggedIn = req.isAuthenticated() ? true : false;

    res.render('pages/profile.ejs', {
        user : req.user, // get the user out of session and pass to template
        logged_in: loggedIn,
        user_id: req.user._id
    });
};

// Route middleware to make sure a user is logged in
exports.isLoggedIn = function (req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
};

// Logout
exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

