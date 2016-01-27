'use strict';

app.controller('userCtrl', ['$scope', 'userStorage', 'localStorageService', function($scope, userStorage, localStorageService){

	var newData = localStorageService.get('user');

	$scope.user = newData || userStorage.getUser();

	$scope.$watch('user', function () {
		localStorageService.set('user', $scope.user);
	}, true);

}]);