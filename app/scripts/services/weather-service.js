'use strict';

/**
 * @ngdoc service
 * @name weatherAngularApp.weatherData
 * @description
 * # weatherData
 * Factory in the weatherAngularApp.
 */
angular.module('weatherAngularApp')
  .factory('WeatherService', function ($http, $q, $window) {
    // Public API here

    var getWeatherData = function (city, getNew) {
      var localData = $window.localStorage.getItem('weatherWidgetData'),
          deferred  = $q.defer();

      city = city || 'Vilnius';

      // do we have new data and is it recent enough?
      if(
        localData &&
        (Math.floor(new Date().getTime() / 1000 - 3600)) < JSON.parse(localData).dt + 7200 &&
        !getNew
      ) {
        deferred.resolve(JSON.parse(localData));
        return deferred.promise;
      } else {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;

        $http.jsonp(url + '&callback=JSON_CALLBACK').
          success(function(data) {
            if(data.cod !== '404') {
              deferred.resolve(data);

              // TODO: move to service
              $window.localStorage.setItem('weatherWidgetData', JSON.stringify(data));
            } else {
              deferred.resolve(false);
            }
          }).
          error(function(data, status) {
            deferred.reject(status);
          });

          return deferred.promise;
      }
    };

    return {
      get: getWeatherData
    };
  });
