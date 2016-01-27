'use strict';

app.controller('editItemCtrl', ['$scope', '$location', 'itemStorage', 'localStorageService', '$cookieStore', function($scope, $location, itemStorage, localStorageService, $cookieStore){

	var newItems = localStorageService.get('items');

	$scope.items = newItems || itemStorage.getItems();

	$scope.$watch('items', function () {
		localStorageService.set('items', $scope.items);
	}, true);

	$scope.edit = true;

	$scope.indexItem = $cookieStore.get('userObj');

	$scope.editEl = function(){
		$scope.items.title = $scope.title;
		$scope.items.price = $scope.price;
		$scope.items.status = false;
		$scope.items.desc = $scope.desc;

		itemStorage.setItems($scope.items);
	};

	$scope.submitForm = function(isValid){
		if(isValid){
			$scope.editEl();
			$location.path('/home');
		}
	};

}]);