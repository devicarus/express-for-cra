var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lowNAMESchema = new Schema({
    name: String
})

var capNAME = mongoose.model('capNAME', lowNAMESchema);

module.exports = capNAME;