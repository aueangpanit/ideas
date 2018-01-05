var User = require('../models/user');
var passport = require('../config/passport');

//var async = require('async');

//const { body,validationResult } = require('express-validator/check');
//const { sanitizeBody } = require('express-validator/filter');

// Render home page
exports.index = function(req, res) {   
    res.render('pages/index.ejs');
};

// Render login page
exports.login_get = function(req, res) {
    res.render('pages/login.ejs', { message: req.flash('loginMessage') });
};

// Process login form
exports.login_post = passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
});

// Render signup page
exports.signup_get = function(req, res) {
    res.render('pages/signup.ejs', { message: req.flash('signupMessage') });
}

// Process signup form
exports.signup_post = passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
});

// Render profile page
exports.profile = function(req, res) {
    res.render('pages/profile.ejs', {
        user : req.user // get the user out of session and pass to template
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


