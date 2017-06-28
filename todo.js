angular.module('todoApp', [])
.controller('TodoController', function ($scope, $http) {
	var todoC = this.$scope;
	todoC.Texto="";
	todoC.Sufijo="Senior";
});
