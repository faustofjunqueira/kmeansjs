var aplicativo = angular.module('kmeans', ['ui.bootstrap', 'ngRoute']);

aplicativo.config(['$routeProvider',
function($routeProvider) {

	$routeProvider.when("/", {
		templateUrl : 'html/inicial.html',
		controller : 'InicialCtrl'

	}).when("/exec", {
		templateUrl : 'html/exec.html',
		controller : 'ExecCtrl'
	}).otherwise({
		redirectTo : '/'
	});
}]);
