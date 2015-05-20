var app = angular.module('ReaderApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	  .when('/books', {
	    controller: 'BookShelfController',
	    templateUrl: 'views/booshelf.html'
	  })
	  .otherwise({
	    redirectTo:'/books'
	  });
});