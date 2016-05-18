var express		= require('express'),
	router		= express.Router(),
	request 	= require('request'),
	Q       	= require('q');
	BASE_URL    = 'https://api.spotify.com/v1/';


router.get('/search', function(req, res){
	var query = req.query.query || '';
	var type = req.query.type;
	var limit = req.query.limit || 20;
	var url = BASE_URL + "search?query=" + query + "&limit=" + limit + "&type=" + type;
	var opts {
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

});

module.exports = router;
