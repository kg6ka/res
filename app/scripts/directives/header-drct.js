'use strict';

app.directive('header',[ function(){
  return {
    restrict: 'AC',
    replace: true,
    scope: {
      user: '='
    },
    templateUrl: "views/header.html"
  };
}]);