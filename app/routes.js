module.exports = function(app, passport, request) {
    
        // =====================================
        // HOME PAGE (with login links) ========
        // =====================================
        app.get('/', function(req, res) {
            var options = { method: 'GET',
              url: 'https://api.themoviedb.org/3/search/multi',
              qs: 
               { include_adult: 'false',
                 page: '1',
                 query: 'new game',
                 language: 'en-US',
                 api_key: 'f5d33aa7f0ee6bdeae50b823541435cc' },
              body: '{}' };
            
            request(options, function (error, response, body) {
              if (error) throw new Error(error);
                body = JSON.parse(body);
              //console.log(body);
              res.render('index.ejs', { 
                    body: {
                        total_results: body.total_results,
                        results: body.results
                    }
                });
            });
        });
    
        // =====================================
        // SEARCH ==============================
        // =====================================
        app.get('/search', function(req, res) {
            var query = req.query.q;
            var page = 1;
            if(req.query.p != null) {
                page = req.query.p;
            }

            var options = { method: 'GET',
            url: 'https://api.themoviedb.org/3/search/multi',
            qs: 
            { include_adult: 'false',
               page: page,
               query: query,
               language: 'en-US',
               api_key: 'f5d33aa7f0ee6bdeae50b823541435cc' },
            body: '{}' };
          
            request(options, function (error, response, body) {
            if (error) throw new Error(error);
              body = JSON.parse(body);
            res.render('search.ejs', {
                    q: query,
                    page: page,
                    total_pages: body.total_pages,
                    total_results: body.total_results,
                    results: body.results                 
                });
            });
        });

        // =====================================
        // LOGIN ===============================
        // =====================================
        // show the login form
        app.get('/login', function(req, res) {
    
            // render the page and pass in any flash data if it exists
            res.render('login.ejs', { message: req.flash('loginMessage') }); 
        });
    
        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));
    
        // =====================================
        // SIGNUP ==============================
        // =====================================
        // show the signup form
        app.get('/signup', function(req, res) {
    
            // render the page and pass in any flash data if it exists
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });
    
        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));
    
        // =====================================
        // PROFILE SECTION =====================
        // =====================================
        // we will want this protected so you have to be logged in to visit
        // we will use route middleware to verify this (the isLoggedIn function)
        app.get('/profile', isLoggedIn, function(req, res) {
            res.render('profile.ejs', {
                user : req.user // get the user out of session and pass to template
            });
        });
    
        // =====================================
        // LOGOUT ==============================
        // =====================================
        app.get('/logout', function(req, res) {
            req.logout();
            res.redirect('/');
        });
    };
    
    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {
    
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();
    
        // if they aren't redirect them to the home page
        res.redirect('/');
    }
    