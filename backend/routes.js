var Post = require('./models/post');

module.exports = function(app) {

	//server routes
	//handles api calls and authentication

	app.get('/api/posts', function(req, res) {
		Post.find(function(err, posts) {
			if (err) {
				res.send(err);
			}
			res.json(posts);
		});
	});

	//route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};