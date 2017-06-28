angular.module('todoApp', [])
.controller('TodoController', function ($scope, $http) {
	$scope.Texto = "";
	$scope.Sufijo = "Senior";

	$scope.Verso = "";
	$http({
			url: user.details_path,
			method: "GET",
			params: {
				scripture: "Psa1",
				v:"valera"
			}
		}).success(function(data) {
        
        $scope.Verso = data;
    });;
});
