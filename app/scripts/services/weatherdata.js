'use strict';

/**
 * @ngdoc service
 * @name weatherAngularApp.weatherData
 * @description
 * # weatherData
 * Factory in the weatherAngularApp.
 */
angular.module('weatherAngularApp')
  .factory('WeatherModel', function ($http, $q, $window) {
    // Public API here
    
    var getWeatherData = function (city, getNew) {
      var localData = $window.localStorage.getItem('weatherWidgetData'),
          city      = city || 'Vilnius',
          deferred  = $q.defer();

      // do we have new data and is it recent enough?
      if(localData && new Date().getTime() / 1000 - 3600 < JSON.parse(localData).dt && !getNew) {
        deferred.resolve(JSON.parse(localData));
        return deferred.promise;
      } else {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;

        $http.jsonp(url + '&callback=JSON_CALLBACK').
          success(function(data) {
            deferred.resolve(data);
          }).
          error(function(data, status) {
            deferred.reject(status);
          });

          // setting data for later reuse
          deferred.promise.then(function(data) {
            $window.localStorage.setItem('weatherWidgetData', JSON.stringify(data));
          });
          return deferred.promise;
      }
    };

    return {
      get: getWeatherData
    };
  });
