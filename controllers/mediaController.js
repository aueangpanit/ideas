var Movie = require('../models/movie');

var async = require('async');

exports.movie_get = function(req, res, next) {
    async.parallel({
            movie: function(callback) {
                Movie.findById(req.query.id).exec(callback);
            }
        },    
        function(err, results) {
            if (err) { return next(err); }
            if (results.movie==null) { // No results.
                var err = new Error('Movie not found');
                err.status = 404;
                return next(err);
            }
            // Success
            res.render('pages/movie', {
                logged_in: req.isAuthenticated() ? true : false, 
                movie: results.movie 
            });
        }
    );
};