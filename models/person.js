var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: {type: String, required: true, max: 100},
    biography: {type: String, max: 10000},
    birthday: {type: Date},
    deathday: {type: Date},
    gender: {type: String},
    homepage: {type: String},
    place_of_birth: {type: String, max: 1000},
    profile_path: {type: String},
    members: {type: Schema.ObjectId, ref: 'User'},
    movies: [{type: Schema.ObjectId, ref: 'Movie'}]
});

module.exports = mongoose.model('Person', personSchema);