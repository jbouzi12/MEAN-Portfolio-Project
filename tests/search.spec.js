var chai 		= require('chai'),
	chaiHttp	= require('chai-http'),
	server 		= require('../server/app'),
	expect		= chai.expect,
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
		.query({type: 'artist', limit: n})
		.end(function(err, res){
			expect(res).to.have.lengthOf(5)
			done();
		});

	});
	it('should return no more than 20 results if no limit is specified')//, function(done){
	// 	var type = 'artist';
	// 	chai.request(server)
	// 	.get('/search')
	// 	.query({limit:''})
	// 	.query({type: type})
	// 	.end(function(err, res){
	// 		expect(res.music.length).to.have.length.below(21);
	// 		// len.should.have.length.below(21);
	// 		done();
	// 	})

	// });

	it('should allow users to search for artist by genre')//, function(done){
	// 	chai.request(server)
	// 	.get('/search')
	// 	.query({type: 'artist', limit: 5, genre: 'rap'})
	// 	.end(function(err, res){
	// 		// try deep equals to test? 
	// 		expect(res.type).to.equal('artists');
	// 		done();
	// 	});

	// });
	it('should allow users to search for albums by genre')//, function(done){
	// 	chai.request(server)
	// 	.get('/search')
	// 	.query({type: 'album', limit: 5, genre: 'rap'})
	// 	.end(function(err, res){
	// 		// try deep equals to test? 
	// 		// expect(res).to.have.lengthOf(5)
	// 		done();
	// 	});

	// });

});
describe('Browse', function(){
	it('should return a 200 status code', function(done){
		chai.request(server)
		.get('/browse')
		.end(function(err, res){
			res.should.have.status(200);
			done();
		})
	});
});