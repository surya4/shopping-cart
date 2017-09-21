var mong = require('../../config/dbconfig.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('debug', true);

var urlSchema = new Schema({
	id : {
		type: Number
	},
	name : {
		type: String,
		unique: false,
		required: true
	},
	email : {
		type: String,
		unique: true,
		required: true
	}
}, 
{collection : 'collection-name'},
{versionKey: false });

Data = mongoose.model('Data', urlSchema)

module.exports = Data;