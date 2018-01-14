var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema({
    name: {type: String, required: true, max: 100},
    movie: [{type: Schema.ObjectId, ref: 'Movie'}]
});

module.exports = mongoose.model('Genre', genreSchema);