var chai 		= require('chai'),
	chaiHttp	= require('chai-http'),
	server 		= require('../server/app'),
	should 		= chai.should();

chai.use(chaiHttp);

describe('Search', function(){
	it('should return a 200 status code', function(done){
		chai.request(server)
		.get('/search')
		.end(function(err, res){
			res.should.have.status(200);
			done();
		})
	});

	it('should return a list of N results', function(done){
		var n = 5;
		chai.request(server)
		.get('/search')
		.query({limit:n})
		.query({type: 'artist', genre: 'rap'})
		.end(function(err, res){
			res.should.have.lengthOf(n);
			done();
		})

	});
	it('should return no more than 20 results if no limit is specified', function(done){
		chai.request(server)
		.get('/search')
		.query({limit:''})
		.query({type: 'artist', genre: 'rap'})
		.end(function(err, res){
			res.should.have.length.below(21);
			done();
		})

	});

	describe('Artists', function(){

		it('should get a list of Artists by genre')//, function(done){
			// chai.request(server)
			// .get('/search/artists')
			// .query({type: 'artist', genre: 'pop'})
			// .end(function(err, res){
			// 	res.should.have.status(200);
			// 	done();
			// })
		// });
		it('should get a list of Artists that match a name');
	});

	describe('Albums', function(){
		// search/albums
		it('should get a list of albums by genre');
		it('should get a list of albums that match a certain name');
	})
})