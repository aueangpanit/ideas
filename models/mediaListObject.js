var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mediaListObjectSchema = new Schema({
    media_type: {type: String, required: true},
    media: {type: Schema.ObjectId, ref: 'media_type'},
    rank: {type: Number},
    list: {type: Schema.ObjectId, ref: 'List'}
});

module.exports = mongoose.model('MediaListObject');