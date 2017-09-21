var mongoose = require('mongoose');
var redis = require('redis');
module.exports = {
	mongo: {
		init: function (params) {
			return require('mongodb').mongoose.connect(
				'mongodb://'+params.host+':'+params.port+'/'+params.db
			)
		},
		default: {
			db: 'test',
			port: 27017
		},
		development: {
			host: '127.0.0.1'
		},
		production: {
			db: 'prod',
			host: '192.168.0.10'
		}
	}
	,
	redis: {
		init: function (params) {
			return require('redis').createClient(params)
		},
		default: {
			port: 6379
		},
		development: {
			host: '127.0.0.1'
		},
		production: {
			host: '192.168.0.11'
		}
	}
}