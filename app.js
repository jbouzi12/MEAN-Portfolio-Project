var express		= require('express'),
	app			= express(),
	mongoose	= require('mongoose'),
	bodyParser	= require('body-parser'),
	methodOverride = require('method-override'),
	port 		= process.env.PORT || 8080,
	path 		= require('path'),
	request 	= require('request'),
	querystring = require('querystring'),
	cookieParser 	= require('cookie-parser');
	scopes 			= 'user-read-private user-read-email';

// Routers
var searchRouter = require('./server/routes/search');

app.use(function(req, res, next){ // enable CORS (will refactor into middleware later)
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// app.use(bodyParser.__dirname+'/client'({ extended: false }));

// Routes
// app.use('/',function(req, res){
// 	res.sendFile(path.join(__dirname+'/client/index.html'));
// });
app.use('/', searchRouter);

var server = app.listen(port, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('listening on port: ', port);
});

module.exports = server;
