module.exports = function(app, passport, request) {
        var apiKey = 'f5d33aa7f0ee6bdeae50b823541435cc';
    
        // =====================================
        // HOME PAGE (with login links) ========
        // =====================================
        app.get('/', function(req, res) {
            res.render('pages/index.ejs');
        });
    
        // =====================================
        // SEARCH ==============================
        // =====================================
        app.get('/search', function(req, res) {
            var query = req.query.q;
            if(query == null || query == "") { query = "#"; }
            var page = 1;
            if(req.query.p != null) {
                page = req.query.p;
            }

            var options = { 
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/multi',
                qs: { 
                    include_adult: 'false',
                    page: page,
                    query: query,
                    language: 'en-US',
                    api_key: apiKey
                },
                body: '{}' 
            };
          
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                body = JSON.parse(body);
                res.render('pages/search.ejs', {
                    q: query,
                    page: page,
                    total_pages: body.total_pages,
                    total_results: body.total_results,
                    results: body.results                 
                });
            });
        });

        // =====================================
        // INFO ================================
        // =====================================
        app.get('/info', function(req, res) {
            

            var id = req.query.id;
            var mediaType = req.query.mt;

            var options = { 
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/' + id,
                qs: { 
                    language: 'en-US',
                    api_key: apiKey 
                },
                body: '{}' 
            };
            
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                
                var info = JSON.parse(body);

                options = { method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/' + id + '/release_dates',
                qs: { api_key: apiKey },
                body: '{}' };
                
                request(options, function (error, response, body) {
                    if (error) throw new Error(error);
                
                    body = JSON.parse(body);
                    var certification = body.results[0].release_dates[0].certification;

                    options = { method: 'GET',
                    url: 'https://api.themoviedb.org/3/movie/' + id + '/credits',
                    qs: { api_key: apiKey },
                    body: '{}' };
                    
                    request(options, function (error, response, body) {
                        if (error) throw new Error(error);
                    
                        body = JSON.parse(body);
                        var cast;
                        var maxCast = 8;
                        if (body.cast.length > maxCast) {
                            cast = new Array(maxCast);
                            for (var i = 0; i < maxCast; i++) {
                                cast[i] = body.cast[i];
                            }
                        }
                        else {
                            cast = body.cast;
                        }

                        options = { method: 'GET',
                        url: 'https://api.themoviedb.org/3/movie/' + id + '/reviews',
                        qs: 
                         { page: '1',
                           language: 'en-US',
                           api_key: apiKey },
                        body: '{}' };
                      
                        request(options, function (error, response, body) {
                            if (error) throw new Error(error);
                        
                            body = JSON.parse(body);
                            var reviews = body.results;

                            res.render('pages/info.ejs', {
                                info: info,
                                media_type: mediaType,
                                certification: certification,
                                cast: cast,
                                reviews: reviews
                            });
                        });


                    });
                });
            });
        });

        // =====================================
        // LOGIN ===============================
        // =====================================
        // show the login form
        app.get('/login', function(req, res) {
    
            // render the page and pass in any flash data if it exists
            res.render('pages/login.ejs', { message: req.flash('loginMessage') }); 
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
            res.render('pages/signup.ejs', { message: req.flash('signupMessage') });
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
            res.render('pages/profile.ejs', {
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
    