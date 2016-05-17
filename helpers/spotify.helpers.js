var request = require('request'),
	env     = require('node-env-file'),
	Q       = require('q');
env(__dirname + '/.env');

var CLIENT_ID   = process.env.SPOTIFY_CLIENT_ID;
var SECRET      = process.env.SPOTIFY_CLIENT_SECRET;
var BASE_URL    = 'https://api.spotify.com/v1/';


