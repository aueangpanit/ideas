var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var releasedInfoSchema = new Schema({
    country: {type: String, required: true},
    date: {type: Date, required: true},
    rating: {type: String}
});

module.exports = mongoose.model('ReleasedInfo', releasedInfoSchema);