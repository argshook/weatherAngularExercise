'use strict';

/**
 * @ngdoc directive
 * @name weatherAngularApp.directive:weatherWidget
 * @description
 * # weatherWidget
 */
angular.module('weatherAngularApp')
  .directive('weatherWidget', function () {
    return {
      restrict: 'E',
      scope: {
        city: '@',
        tempUnit: '@'
      },
      replace: true,
      templateUrl: 'views/directives/weather-widget.html',
      controller: function($scope, WeatherService, $log) {
        $scope.showAdditional = true;
        $scope.weatherData = null;

        $scope.getData = function() {
          WeatherService.get($scope.city, true)
            .then(function(data) {
              if(data) {
                $scope.weatherData = data;
              } else {
                $log.log("Couldn't fetch data for " + $scope.city);
              }
            });
        };

        $scope.toggleTempUnit = function() {
          $scope.tempUnit = $scope.tempUnit === 'C' ? 'F' : 'C';
        };

        ;(function() {
          $scope.getData();
        })();
      }
    };
  });
