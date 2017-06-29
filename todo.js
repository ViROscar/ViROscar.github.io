angular.module('todoApp', [])
.controller('TodoController', function ($scope, $http, $sce) {
	$scope.Texto = "";
	$scope.Sufijo = "Senior";

	$scope.Verso = "";
	
	$http.jsonp($sce.trustAsResourceUrl("http://getbible.net/json?p=John1&v=valera"), {jsonpCallbackParam: 'callback'})
    .then(function(data){
        $scope.Verso = data.data;
    });

});
