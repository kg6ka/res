'use strict';

app.filter('paginationStart', [function(){
	return function(input, start){
		start = +start;
		return input.slice(start);
	};
}]);