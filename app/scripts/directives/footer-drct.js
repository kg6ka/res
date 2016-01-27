'use strict';

app.directive('footer',[ function(){
	return {
		restrict: 'AC',
		replace: true,
		scope: {
			user: '='
		},
		templateUrl: "views/footer.html"
	};
}]);