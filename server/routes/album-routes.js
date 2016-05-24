var express = require('express'),
	router = express.Router(),
	Album = require('../models/album');


router.param('id', function(req, res, next, id){
	req.id = id;
	next();
});

router.get('/', function(req, res){
	Album.find(function(err, actors){
		if (err) return console.error(err);
		console.log(actors);
		res.json(actors)

	});
});
router.get('/:id', function(req, res){
	Album.findOne({_id: req.id}, function(err, album){
		if (err) return console.error(err);
		console.log('album', album);
		res.json(album);
	});
});
router.post('/',function(req, res){
	var newAlbum = new Album(req.body);
	newAlbum.save(function(err, album, numAffected){
		if (err) return console.error(err);
		// console.log('Number of documents saved: ', numAffected);
		// console.log(album);
		res.json(album);
	});
});
router.put('/:id', function(req, res){
	var newAlbum = req.body;
	var promise = Album.findById(req.id);
	
	newAlbum.updated = new Date();

	promise.then(function(err, album){
		if (err) {
			return console.error(err);
		} else if (!album){
			return (new Error('Could not locate Album'));
		}
		Album.update({_id: req.id}, newAlbum, function(err, response){
			if (err) return console.error(err);
			console.log('Operation successful with following response: ', response);
			res.send(response);
		});
	});
});
router.delete('/:id', function(req, res){
	var promise = Album.findById(req.id);

	promise.then(function(err, album){
		if (err) {
			return console.error(err);
		} else if (!album){
			return (new Error('Could not locate album'));
		}

		album.remove(function(err){
			if (err) return console.error(err);
			console.log('Removed album');
			res.send({});
		});
	});

});

module.exports = router;
