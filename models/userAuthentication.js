var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserAuthenticationSchema = new Schema({
    username: {type: String, required: true, max: 100},
    password: {type: String, required: true, min: 8, max: 100}
});

module.exports = mongoose.model('UserAuthentication', UserAuthenticationSchema);