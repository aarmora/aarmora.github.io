var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'firebase']);

app.config(['$routeProvider', function ($routeProvider){
	$routeProvider
	.when('/Contact', {
		controller: 'homeController',
		templateUrl: '/views/contact.html',
		caseInsensitiveMatch: true
	})
	.otherwise({
		controller: 'homeController',
		templateUrl: '/views/home.html'
	})
}]);

