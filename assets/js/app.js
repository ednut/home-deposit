	angular.module('myApp.controllers', []);
	angular.module('myApp.models', []);
	var myApp = angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.models']);

	// configure our routes
	myApp.config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/",
	      templateUrl: "partials/home.html"
	    })

	    .state('landlord', {
	      url: "/landlord",
	      templateUrl: "partials/landlord.html"
	    })

			.state('account', {
	      url: "/account",
	      templateUrl: "partials/account.html"
			})

			.state('admin', {
	      url: "/admin",
	      templateUrl: "partials/admin.html"
			})
			
	});