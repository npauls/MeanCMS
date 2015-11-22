(function () {
	"use strict";

	angular.module('myApp', ['ui.router'])
		.config(routing);

	function routing ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: './views/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: './views/about.html'
			})
			.state('posts', {
				url: '/posts',
				templateUrl: './scripts/posts/posts.html',
				controller: 'PostsController',
				controllerAs: 'vm'
			})
			.state('admin', {
				url: '/admin',
				templateUrl: './scripts/admin/admin.html'
			});
	}

})();