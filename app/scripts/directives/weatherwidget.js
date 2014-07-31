'use strict';

/**
 * @ngdoc directive
 * @name weatherAngularApp.directive:weatherWidget
 * @description
 * # weatherWidget
 */
angular.module('weatherAngularApp')
  .directive('weatherWidget', function (WeatherModel) {
    return {
      templateUrl: 'views/directives/weatherwidget.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.tempType = 'C'; // either C or F
        scope.city = 'Vilnius';
        scope.showAdditional = false;

        var getData = function() {
          WeatherModel.get(scope.city, true).then(function(data) {
            scope.weatherData = data;
          });
        };

        getData(); // initial data
        scope.updateCity = getData;

        scope.toggleTempType = function() {
          scope.tempType = scope.tempType === 'C' ? 'F' : 'C';
        };
      }
    };
  });
