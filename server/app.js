var express		= require('express'),
	app			= express(),
	mongoose	= require('mongoose'),
	bodyParser	= require('body-parser'),
	methodOverride = require('method-override'),
	port 		= process.env.PORT || 8080,
	request 	= require('request'),
	querystring = require('querystring'),
	cookieParser 	= require('cookie-parser');
	scopes 			= 'user-read-private user-read-email';

// Routers
var searchRouter = require('./routes/search');

app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(function(req, res, next){ // enable CORS (will refactor into middleware later)
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// Routes

app.use('/', searchRouter);

var server = app.listen(port, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('listening on port: ', port);
});

module.exports = server;