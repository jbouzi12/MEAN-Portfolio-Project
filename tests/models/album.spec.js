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

	beforeEach(function(done){
		var newAlbum = {
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
		}
	});

	describe('#create', function(){
		// it('should create a new album', function(){
		// })
	})
});