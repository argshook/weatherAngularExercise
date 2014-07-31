'use strict';

/**
 * @ngdoc filter
 * @name weatherAngularApp.filter:temperature
 * @function
 * @description
 * # temperature
 * Filter in the weatherAngularApp.
 */
angular.module('weatherAngularApp')
  .filter('temperature', function () {
    return function (temperature, tempType) {
      if(tempType === 'C') { // Celsius
        return parseFloat(temperature) - 273.15 >> 0; // kelvin to celsius
      } else { // Fahrenheit
        return ((temperature - 273.15) * 1.8 >> 0) + 32; // kelvin to fahrenheit
      }
    };
  });
