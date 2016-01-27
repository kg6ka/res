'use strict';

app.controller('profileCtrl', ['$scope', '$location', 'userStorage', 'localStorageService', function($scope, $location, userStorage, localStorageService){

	var newData = localStorageService.get('user');

	$scope.user = newData || userStorage.getUser();

	$scope.$watch('user', function () {
		localStorageService.set('user', $scope.user);
	}, true);

	$scope.phone = '380';
	$scope.change = false;
	var status = false;

	$scope.openClose = function(e){
		e.preventDefault();
		$scope.change = !$scope.change;
	};

	$scope.confirm = function(e){
		e.preventDefault();
		status = true;
	};

	$scope.editUser = function(){
		$scope.user.name = $scope.name;
		$scope.user.surname = $scope.surname;
		$scope.user.email = $scope.email;
		$scope.user.number = $scope.phone;
		if(status){
			$scope.user.password = $scope.password;
		} else {
			$scope.user.password;
		}
		
		userStorage.setUser($scope.user);
	};

	$scope.submitForm = function(isValid){
		if(isValid){
			$scope.editUser();
			$location.path('/home');
		}
	};

}]);