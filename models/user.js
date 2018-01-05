import { ObjectID } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';

var moongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    user_authentication: {type: Schema.ObjectID, ref: 'UserAuthentication'}
});

module.exports = mongoose.model('User', UserSchema);