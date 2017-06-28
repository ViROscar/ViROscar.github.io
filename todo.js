angular.module('todoApp', [])
.controller('TodoController', function ($scope, $http) {
	var todoC = $scope;
	todoC.Texto="";
	todoC.Sufijo="Senior";
});
