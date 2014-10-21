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
        return Math.floor(parseFloat(temperature) - 273.15); // kelvin to celsius
      } else { // Fahrenheit
        return (Math.floor((temperature - 273.15) * 1.8)) + 32; // kelvin to fahrenheit
      }
    };
  });
