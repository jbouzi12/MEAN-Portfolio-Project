var request = require('request'),
	env     = require('node-env-file'),
	Q       = require('q');
env(__dirname + '/.env');

var CLIENT_ID   = process.env.SPOTIFY_CLIENT_ID;
var SECRET      = process.env.SPOTIFY_CLIENT_SECRET;
var BASE_URL    = 'https://api.spotify.com/v1/';

exports.search = function(req, res) {
	var query = req.query.query || '';
	var type = req.query.type || 'album';
	var limit = req.query.limit || 20;
	var url = BASE_URL + "search?q=" + query + "&limit=" + limit + "&type=" + type;
	var opts = {
		url: url,
		headers: {
			'User-Agent': 'request'
		}
	};

	var deferred = Q.defer();

	request(opts, function(err, response, body){
		if (!err && response.statusCode == 200) {
			deferred.resolve(JSON.parse(body));
		} else {
			deferred.reject(err);
		}
	});

	return deferred.promise

}
exports.browse = function(req, res){
	var url = BASE_URL + "browse/new-releases";

	// TODO
	// Need User Access Token (Must Set Up OAuth)

	var opts = {
		url: url,
		headers: {
			'User-Agent': 'request',
			'access_token': 
		}
	};
	var deferred = Q.defer();

	request(opts, function(err, response, body){
		if (!err && response.statusCode == 200) {
			deferred.resolve(JSON.parse(body));
		} else {
			deferred.reject(err);
		}
	});

	return deferred.promise

}