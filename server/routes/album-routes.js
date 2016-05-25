var express = require('express'),
	router = express.Router(),
	Album = require('../models/album');


router.param('id', function(req, res, next, id){
	req.id = id;
	next();
});

router.get('/', function(req, res){
	Album.find(function(err, actors){
		if (err) res.send(err);
		console.log(actors);
		res.send(actors)

	});
});
router.get('/:id', function(req, res){
	Album.findOne({_id: req.id}, function(err, album){
		if (err) res.send(err);
		console.log('album', album);
		res.send(album);
	});
});
router.post('/',function(req, res){
	var newAlbum = new Album(req.body);
	newAlbum.save(function(err, album, numAffected){
		if (err) res.send(err);
		// console.log('Number of documents saved: ', numAffected);
		// console.log(album);
		res.send(album);
	});
});
router.put('/:id', function(req, res){
	var newAlbum = req.body;	
	newAlbum.updated = new Date();
	
	Album.findByIdAndUpdate({_id: req.id}, {$set: newAlbum}, function(err, response){
		if (err)  res.send(err);
		console.log('Operation successful with following response: ', response);
		res.send(response);
	});

});
router.delete('/:id', function(req, res){

	Album.findByIdAndRemove(req.id, function(err){
		if (err) res.send(err);
		console.log('Removed album');
		res.send(200);

	});

});

module.exports = router;
