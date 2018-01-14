var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productionCompanySchema = new Schema({
    name: {type: String, required: true, max: 100},
    description: {type: String, max: 2000},
    headquarters: {type: String, max: 100},
    homepage: {type: String},
    logo_path: {type: String},
    parent_company: {type: String},
    movies: [{type: Schema.ObjectId, ref: 'Movie'}]
});

module.exports = mongoose.model('ProductionCompany', productionCompanySchema);