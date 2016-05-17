var chai 		= require('chai'),
	chaiHttp	= require('chai-http'),
	server 		= require('../server/app'),
	should 		= chai.should();

chai.use(chaiHttp);

describe('Search', function(){
	describe('Artists', function(){

		it('should get a list of Artists by genre', function(done){
			chai.request(server)
			// .get('/search')
			.get('/artists/:genre')
			.end(function(err, res){
				res.should.have.status(200);
				done();
			})
		});
		it('should get a list of Artists that match a name', function(done){
			chai.request(server)
			// .get('/search')
			.get('/artists/:name')
			.end(function(err, res){
				res.should.have.status(200);
				done();
			})

		});
	});

	describe('Albums', function(){
		it('should get a list of albums by genre');
		it('should get a list of albums that match a certain name');
		it('should ')		
	})
})