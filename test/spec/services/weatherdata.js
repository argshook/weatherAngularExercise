'use strict';

describe('Service: weatherData', function () {

  // load the service's module
  beforeEach(module('weatherAngularApp'));

  // instantiate service
  var weatherData;
  beforeEach(inject(function (_weatherData_) {
    weatherData = _weatherData_;
  }));

  it('should return deferred object', function () {
    // expect(!!weatherData).toBe(true);
  });

});
