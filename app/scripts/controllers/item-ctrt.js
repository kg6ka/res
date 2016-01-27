'use strict';

app.controller('itemCtrl',['$scope', 'ItemService', function($scope, ItemService){
	$scope.articles = ItemService.query();
}]);