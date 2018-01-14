var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var recommendationSchema = new Schema({
    author: {type: Schema.ObjectId, ref: 'User'},
    members: [{type: Schema.ObjectId, ref: 'User'}],
    movie: {type: Schema.ObjectId, ref: 'Movie'},
    content: {type: String, required: true, max: 2000}
});

module.exports = mongoose.model('Recommendation', recommendationSchema);