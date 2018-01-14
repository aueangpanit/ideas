var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: {type: String, required: true, max: 100},
    original_title: {type: String, max: 100},
    poster_path: {type: String},
    status: {type: String, enum: ["announced", "released", "cancelled"], required: true},
    release_info: [{type: Schema.ObjectId, ref: 'ReleaseInfo'}], //released dates and rating for each country
    production_companies: [{type: Schema.ObjectId, ref: 'ProductionCompany'}],
    genres: [{type: Schema.ObjectId, ref: 'Genres'}],
    duration: {type: Number},
    members: [{type: Schema.ObjectId, ref: 'User'}],
    synopsis: {type: String, required: true, min: 10, max: 2000},
    collection: {type: Schema.ObjectId, ref: 'Collection'},
    cast_and_crew: [{type: Schema.ObjectId, ref: 'Person'}],
    reviews: [{type: Schema.ObjectId, ref: 'Reviews'}],
    recommendations: [{type: Schema.ObjectId, ref: 'Recommendation'}]
});

module.exports = mongoose.model('Movie', movieSchema);