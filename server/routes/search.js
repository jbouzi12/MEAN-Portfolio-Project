var express		= require('express'),
	router		= express.Router(),
	request 	= require('request'),
	Q       	= require('q'),
	Spotify 	= require('../../helpers/spotify.helpers'),
	BASE_URL    = 'https://api.spotify.com/v1/';


router.get('/search', function(req, res){
	var type = req.query.type + 's';
	Spotify.search(req, res)
		.then(function(results){
			var data = {
				music: results[type].items,
				type: type
			}
			console.log(data.music.length);

			res.send(data);
		})
		.fail(function(err){
			res.send(err);
		});
});
router.get('/browse', function(req, res){
	Spotify.browse(req, res)
		.then(function(results){
			console.log(results);
			res.send(results.albums);
		})
		.fail(function(err){
			res.send(err);
		});
});

module.exports = router;
