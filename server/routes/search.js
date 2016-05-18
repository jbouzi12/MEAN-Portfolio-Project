var express		= require('express'),
	router		= express.Router(),
	request 	= require('request'),
	Q       	= require('q'),
	Spotify 	= require('../../helpers/spotify.helpers'),
	BASE_URL    = 'https://api.spotify.com/v1/';


router.get('/search', function(req, res){
	Spotify.search(req, res)
		.then(function(results){
			res.send(results.artists.items);
		})
		.fail(function(err){
			res.send(err);
		});
});
router.get('/browse', function(req, res){
	Spotify.browse(req, res)
		.then(function(results){
			console.log(results);
			res.send(results);
		})
		.fail(function(err){
			res.send(err);
		});
});

module.exports = router;
