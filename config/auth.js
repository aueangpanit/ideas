// expose our config directly to our application using module.exports
module.exports = {
    
        'facebookAuth' : {
            'clientID'      : '1483182925068093', // your App ID
            'clientSecret'  : '433627f5f7118f6feb9a237548835c84', // your App Secret
            'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
            'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
            'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
        },
    
        'twitterAuth' : {
            'consumerKey'       : 'your-consumer-key-here',
            'consumerSecret'    : 'your-client-secret-here',
            'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
        },
    
        'googleAuth' : {
            'clientID'      : 'your-secret-clientID-here',
            'clientSecret'  : 'your-client-secret-here',
            'callbackURL'   : 'http://localhost:8080/auth/google/callback'
        }
    
    };