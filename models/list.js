var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var listSchema = new Schema({
    mediaInstance: [{type: Schema.ObjectId, ref: 'MediaListObject'}]
});

module.exports = mongoose.model('List', listSchema);