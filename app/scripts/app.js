'use strict';

/**
 * @ngdoc overview
 * @name weatherAngularApp
 * @description
 * # weatherAngularApp
 *
 * Main module of the application.
 */
angular
  .module('weatherAngularApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/weather.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
