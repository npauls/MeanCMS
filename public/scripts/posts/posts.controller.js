(function () {
	"use strict";

	angular.module('myApp')
		.controller('PostsController', controller);

	function controller ($http) {
		var vm = this;

		function getAllPosts () {
			$http.get('/api/posts').then(function(posts) {
				vm.posts = posts.data;
			}, function(error) {
				console.log(error);
			});
		};

		function initialize () {
			getAllPosts();
		}

		initialize();

		

	}
})();