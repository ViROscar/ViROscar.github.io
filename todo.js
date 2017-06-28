angular.module('todoApp', [])
.controller('TodoController', function ($scope, $http) {
	$scope.Texto = "";
	$scope.Sufijo = "Senior";

	$scope.Verso = "";
	$http({
		url: "https://getbible.net/json?scripture=Psa%20119:4-16;23:1-6&v=valera",
		method: "GET"
	}).then(function s(data) {
		$scope.Verso = data;
	});
});
