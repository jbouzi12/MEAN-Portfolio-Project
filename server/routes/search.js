var express		= require('express'),
	router		= express.Router(),
	request 	= require('request'),
	Q       	= require('q'),
	Spotify 	= require('../../helpers/spotify.helpers'),
	BASE_URL    = 'https://api.spotify.com/v1/';


router.get('/search', function(req, res){
	Spotify.search(req, res)
		.then(function(results){
			console.log(results.artists.items.length);
			res.send(results.artists.items);
		})
		.fail(function(err){
			res.send(err);
		});
});

module.exports = router;
