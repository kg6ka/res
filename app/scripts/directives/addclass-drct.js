'use strict';

app.directive('addClassDrct',[function(){
	return function(scope, element, attributes){
		element.on('click', function(){
			angular.element(element).parent().children().removeClass('active');
			angular.element(element).addClass('active');
		});
	};
}]);