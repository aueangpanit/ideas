var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    author: {type: Schema.ObjectId, ref: 'User', required: true},
    content: {type: String, required: true, max: 100000},
    movie: {type: Schema.ObjectId, ref: 'Movie'}
});

module.exports = mongoose.model('Review', reviewSchema);