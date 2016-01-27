'use strict';

var app = angular
  .module('cleveroadTestApp', [
  	'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ]);
  app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]);
  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'profile'
      })
      .when('/create', {
        templateUrl: 'views/item.html',
        controller: 'createItemCtrl',
        controllerAs: 'cretItem'
      })
      .when('/edit', {
        templateUrl: 'views/item.html',
        controller: 'editItemCtrl',
        controllerAs: 'editItem'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .when('/logout', {
        redirectTo: '/'
      })
      .otherwise({
        redirectTo: '/404'
      });
  }]);