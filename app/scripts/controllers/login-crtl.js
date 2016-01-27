'use strict';

app.controller('LoginCtrl',['$scope', '$location', 'userStorage', function($scope, $location, userStorage){

	$scope.user = userStorage.getUser();
	$scope.errorLogin = false;

	$scope.loginTo = function(){
		if($scope.user.email === $scope.email && $scope.user.password === $scope.password){
			$location.path('/home');
		} else {
			$scope.errorLogin = true;
		}
	};

	$scope.submitForm = function(isValid){
		if(isValid){
			$scope.loginTo();
		}
	};

}]);