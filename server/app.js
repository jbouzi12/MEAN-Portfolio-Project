var express		= require('express'),
	app			= express(),
	mongoose	= require('mongoose'),
	bodyParser	= require('body-parser'),
	methodOverride = require('method-override'),
	port 		= process.env.PORT || 8080;

app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(function(req, res, next){ // enable CORS (will refactor into middleware later)
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.listen(port, function(){
	console.log('listening on port: ', port);
});
