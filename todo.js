angular.module('todoApp', [])
.controller('TodoController', function ($scope, $http) {
	$scope.Texto = "";
	$scope.Sufijo = "Senior";

	$scope.Verso = "";

	$http({
		method: 'GET',
		dataType: 'json',
		url: 'https://getbible.net/json?scripture=Psa%20119:4-16;23:1-6&v=valera'
	}).then(function successCallback(response) {
		$scope.Verso = data;
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});

});
