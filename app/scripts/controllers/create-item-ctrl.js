'use strict';

app.controller('createItemCtrl', ['$scope', '$location', 'localStorageService', 'itemStorage', function($scope, $location, localStorageService, itemStorage){

	var newItems = localStorageService.get('items');

	$scope.items = newItems || itemStorage.getItems();

	$scope.$watch('items', function () {
	 localStorageService.set('items', $scope.items);
	}, true);

	$scope.create = true;

	$scope.addItem = function(){
		$scope.items.push({
			title: $scope.title,
			price: $scope.price,
			status: false,
			desc: $scope.desc
		});
		$scope.title = '';
		$scope.price = '';
		$scope.desc = '';
		itemStorage.setItems($scope.items);
	};

	$scope.submitForm = function(isValid){
		if(isValid){
			$scope.addItem();
			$location.path('/home');
		}
	};
}]);