'use strict';

/**
 * @ngdoc function
 * @name weatherAngularApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the weatherAngularApp
 */
angular.module('weatherAngularApp')
  .controller('WeatherCtrl', function ($scope, WeatherModel) {

    $scope.tempType = 'C'; // either C or F
    $scope.city = 'Vilnius';
    $scope.showAdditional = false;

    var getData = function() {
      WeatherModel.get($scope.city, true).then(function(data) {
        $scope.weatherData = data;
      });
    };

    getData(); // initial data
    $scope.updateCity = getData;

    $scope.toggleTempType = function() {
      $scope.tempType = $scope.tempType === 'C' ? 'F' : 'C';
    };

  });
