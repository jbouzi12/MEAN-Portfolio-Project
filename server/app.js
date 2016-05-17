var express		= require('express'),
	app			= express(),
	mongoose	= require('mongoose'),
	bodyParser	= require('body-parser'),
	methodOverride = require('method-overrride'),
	port 		= process.env.PORT || 8080;

app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.listen(port, function(){
	console.log('listening on port: ', port);
});
