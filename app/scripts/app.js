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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
