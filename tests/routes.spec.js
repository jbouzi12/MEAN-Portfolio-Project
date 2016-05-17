var chai 		= require('chai'),
	chaiHttp	= require('chai-http'),
	server 		= require('./server/app'),
	should 		= chai.should();

chai.use(chaiHttp);

describe('Search', function(){
	it('should get a list of Artists by genre');
	it('should get a list of Artists by name');
	it('should get a list of albums by genre');
	it('should get a list of albums by name');
})