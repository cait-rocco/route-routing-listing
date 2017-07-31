'use strict';

const myApp = angular.module('app', ['ngRoute']);

myApp.config(($routeProvider) => {
	$routeProvider
	.when('/blue-ridge-parkway', {
		templateUrl: 'BRP.html',
		controller: 'BRP'
	})
	.when('/route66', {
		templateUrl: 'route66.html',
		controller: 'Route66'
	})
	.otherwise('/');
});