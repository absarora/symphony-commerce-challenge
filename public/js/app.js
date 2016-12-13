'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
