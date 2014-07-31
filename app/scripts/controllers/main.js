'use strict';

/**
 * @ngdoc function
 * @name weatherAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAngularApp
 */
angular.module('weatherAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
