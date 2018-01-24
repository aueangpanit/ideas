var Movie = require('../models/movie');
var passport = require('../config/passport');

//var async = require('async');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

exports.add_movie_get = function(req, res) {
    res.render('pages/add-movie.ejs', {
        logged_in: req.isAuthenticated() ? true : false,
        user_id: req.user._id,
        errors: null
    });
};

// Handle movie create on POST
exports.add_movie_post = [
    // Validate fields
    body('title', 'Title must not be empty.').isLength({ min: 1 }).trim(),
    body('synopsis', 'Synopsis must not be empty.').isLength({ min: 1 }).trim(),
    body('status', 'Status must not be empty.').isLength({ min: 1 }).trim(),
  
    // Sanitize fields (using wildcard)
    sanitizeBody('*').trim().escape(),

    // Process request after validation and sanitization
    (req, res, next) => {
        
        // Extract the validation errors from a request 
        const errors = validationResult(req);

        // Create a Movie object with escaped and trimmed data.
        var movie = new Movie({
            title: req.body.title,
            original_title: req.body.originalTitle,
            synopsis: req.body.synopsis,
            duration: req.body.duration,
            status: req.body.status
        });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.
            res.render('pages/add-movie.ejs', {
                logged_in: req.isAuthenticated() ? true : false,
                user_id: req.user._id,
                movie: movie,
                errors: errors.array() 
            });
            return;
        }
        else {
            // Data from form is valid. Save book.
            movie.save(function (err) {
                if (err) { return next(err); }
                    //successful - redirect to new book record.
                    res.redirect('/');
                });
        }
    }
];

