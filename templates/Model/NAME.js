var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NAMESchema = new Schema({
    name: String
})

var NAME = mongoose.model('NAME', NAMESchema);

module.exports = NAME;