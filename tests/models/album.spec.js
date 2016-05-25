var chai 		= require('chai'),
	chaiHttp	= require('chai-http'),
	server 		= require('../../server/app'),
	mongoose	= require('mongoose'),
	Album		= require('../../server/models/album'),
	expect		= chai.expect,
	should 		= chai.should();

mongoose.connect('mongodb://localhost/moviedb');


chai.use(chaiHttp);

describe('Albums',function(){

	Album.collection.drop();

	beforeEach(function(done){
		var newAlbum = new Album({
			name: "Yeezus",
			artist: "Kanye West",
			releaseDate: "2014",
			artists: [],
			genres: [],
			images: [
				{
		            "height": 640,
		            "url": "https://i.scdn.co/image/30f1e8a854cfe95593e29b05f9d56d8f624514ad",
		            "width": 640
	          	},
		        {
		            "height": 300,
		            "url": "https://i.scdn.co/image/c24892614ef7d029e66d31ca64addd0d563f4fcc",
		            "width": 300
		        },
	          	{
		            "height": 64,
		            "url": "https://i.scdn.co/image/ffb9561c4664f74253e23d8dcd965e515e059260",
		            "width": 64
	            }
	        ],
	        apiRef: "7D2NdGvBHIavgLhmcwhluK",
	        apiUrl: "https://api.spotify.com/v1/albums/7D2NdGvBHIavgLhmcwhluK",
	        tracks: {
	        	href: "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj/tracks?offset=0&limit=50",
	        	items:[]
	        }
		});

		newAlbum.save(function(err){
			done();
		})
	});

	afterEach(function(done){
		Album.collection.drop();
		done();
	})

	it('should list ALL albums', function(done){
		chai.request(server)
			.get('/albums')
			.end(function(err, res){
				res.should.have.status(200);
				done();
			});
	});
	it('should create a new album', function(done){
		var madvillainy = {
			name: "Madvillainy",
			artist: "MF DOOM",
			releaseDate: "2002",
			artists: [],
			genres: [{name: "rap"}],
			images: [],
			apiRef: "",
			apiUrl: "",
			tracks: {
				href:"",
				items:[]
			},
			updated: Date.now
		};

		chai.request(server)
			.post('/albums')
			.send(madvillainy)
			.end(function(err, res){
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
			    res.body.should.have.property('_id');
			    res.body.should.have.property('name');
			    res.body.should.have.property('artist');
			    res.body.name.should.equal('Madvillainy');
				res.body.artist.should.equal('MF DOOM');
				done();
			});
	});

	it('should list a single album', function(done){
		var newAlbum = new Album({
			name: "Yeezus",
			artist: "Kanye West",
			releaseDate: "2014",
			artists: [],
			genres: [],
			images: [
				{
		            "height": 640,
		            "url": "https://i.scdn.co/image/30f1e8a854cfe95593e29b05f9d56d8f624514ad",
		            "width": 640
	          	},
		        {
		            "height": 300,
		            "url": "https://i.scdn.co/image/c24892614ef7d029e66d31ca64addd0d563f4fcc",
		            "width": 300
		        },
	          	{
		            "height": 64,
		            "url": "https://i.scdn.co/image/ffb9561c4664f74253e23d8dcd965e515e059260",
		            "width": 64
	            }
	        ],
	        apiRef: "7D2NdGvBHIavgLhmcwhluK",
	        apiUrl: "https://api.spotify.com/v1/albums/7D2NdGvBHIavgLhmcwhluK",
	        tracks: {
	        	href: "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj/tracks?offset=0&limit=50",
	        	items:[]
	        }
		});
		newAlbum.save(function(err, data){
			chai.request(server)
				.get('/albums/'+data._id)
				.end(function(err, res){
		          res.should.have.status(200);
		          res.should.be.json;
		          res.body.should.be.a('object');
		          res.body.name.should.equal('Yeezus');
		          done();
				})
		})
	});

	it('should update a SINGLE album on /album/<id> PUT')//, function(done) {
		  // chai.request(server)
		  //   .get('/albums')
		  //   .end(function(err, res){
		  //     chai.request(server)
		  //       .put('/albums/'+res.body[0]._id)
		  //       .send({'name': 'College Dropout'})
		  //       .end(function(error, response){
		  //         response.should.have.status(200);
		  //         response.should.be.json;
		          // response.body.should.be.a('object');
		          // response.body.should.have.property('UPDATED');
		          // response.body.UPDATED.should.be.a('object');
		          // response.body.UPDATED.should.have.property('name');
		          // response.body.UPDATED.should.have.property('_id');
		          // response.body.UPDATED.name.should.equal('College Dropout');
		    //       done();
		    // });
	    // });
	// });

});