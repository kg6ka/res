'use strict';

app.controller('MainCtrl', ['$scope', '$location', '$http', '$filter', 'itemStorage', 'localStorageService', '$cookieStore', function($scope, $location, $http, $filter, itemStorage, localStorageService, $cookieStore){

	var newItems = localStorageService.get('items');

	$scope.items = newItems || itemStorage.getItems();

	$scope.$watch('items', function () {
		localStorageService.set('items', $scope.items);
	}, true);

	// pagination init

	$scope.indexItem = 0;
	$scope.curPage = 0;
	$scope._index = 0;
	$scope.rowsPerPage = 10;

	$scope.removeItems = function() {
		var oldTodos = $scope.items;
		$scope.items = [];
		angular.forEach(oldTodos, function(item) {
			if (!item.status){
				$scope.items.push(item);

				itemStorage.setItems($scope.items);
			}
		});
		if(($scope.items.length % $scope.rowsPerPage) == 0 && $scope.curPage !== 0){
			$scope.curPage = Math.ceil($scope.items.length / $scope.rowsPerPage - 1);
		}
	};

	$scope.changePrePage = function(n){
		$scope.rowsPerPage = n;
		if($scope.items.length <= $scope.rowsPerPage){
			$scope.curPage = 0;
		} else {
			$scope.curPage = Math.ceil($scope.items.length / $scope.rowsPerPage - 1);
		}
	};

	$scope.numberOfPages = function() {
		return Math.ceil($scope.items.length / $scope.rowsPerPage);
	};
	$scope.numberOfPages();

	$scope.pageBack = function() {
		$scope.curPage = $scope.curPage - 1;
	};

	$scope.pageForward = function() {
		$scope.curPage = $scope.curPage + 1;
	};

	$scope.firstPage = function() {
		return $scope.curPage == 0;
	};

	$scope.lastPage = function() {
		var lastPageNum = Math.ceil($scope.items.length / $scope.rowsPerPage - 1);
		return $scope.curPage == lastPageNum;
	};

	// openClose init
	$scope.enabled = undefined;

	$scope.enablePane = function(index) {
		$scope.getIndexItem(index);
		$scope.enabled = $scope.indexItem;
	};

	$scope.getIndexItem = function(index){
		if($scope.curPage == 0){
			return $scope.indexItem = index;
		} else {
			return $scope.indexItem = index + ($scope.curPage * $scope.rowsPerPage);
		}
	};

	$scope.Edit = function(index){
		$scope.getIndexItem(index);
		$cookieStore.put('userObj', $scope.indexItem);
		$location.path('/edit');
	};

}]);