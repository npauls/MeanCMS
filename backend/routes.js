var Post = require('./models/post');

module.exports = function(app) {

	//server routes
	//handles api calls and authentication

	//CREATE
	app.post('/api/posts', function(req, res) {
		
		var post = new Post();
		post.title = req.body.title;
		post.author = req.body.author;
		post.body = req.body.body;
		post.comments = req.body.comments;
		post.date = req.body.date;
		post.hidden = req.body.hidden;
		post.meta = req.body.meta;

		post.save(function(err) {
			if (err) {
				return handleError(res, err);
			}
			res.status(201).json({message: 'Post created.'});
		});
	});

	//READ
	app.get('/api/posts/:id', function(req, res) {
		Post.findById(req.params.id, function (err, post) {
			if (err) { 
				return handleError(res, err); 
			}
			if (!post) { 
				return res.status(404).send('Not Found'); 
			}
			return res.json(post);
		});
	});

	//UPDATE
	app.put('/api/posts/:id', function(req, res) {
		Post.findById(req.params.id, function(err, post) {
			if (err) {
				return handleError(res, err);
			}

			post.title = req.body.title;
			post.author = req.body.author;
			post.body = req.body.body;
			post.comments = req.body.comments;
			post.date = req.body.date;
			post.hidden = req.body.hidden;
			post.meta = req.body.meta;

			post.save(function(err) {

				if (err) {
					return handleError(res, err);
				}
				res.status(201).json({message: 'Post updated.'});
			});
		});
	});

	//DELETE
	app.delete('/api/posts/:id', function(req, res) {
		Post.remove({
			_id: req.params.id
		}, function(err, post) {
			if (err) {
				res.send(err);
			}
			res.status(201).json({message: 'Post deleted.'});
		});
	});

	//READ ALL
	app.get('/api/posts', function(req, res) {
		Post.find(function(err, posts) {
			if (err) {
				res.send(err);
			}
			res.json(posts);
		});
	});

	function handleError(res, err) {
		return res.status(500).send(err);
	}

	//route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendFile('/home/ldcaponi/Workspace/MeanCMS/public/views/index.html');
	});
};