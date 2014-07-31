'use strict';

describe('Filter: temperature', function () {

  // load the filter's module
  beforeEach(module('weatherAngularApp'));

  // initialize a new instance of the filter before each test
  var temperature;
  beforeEach(inject(function ($filter) {
    temperature = $filter('temperature');
  }));

  it('should return 86 fahrenheit degrees for :"', function () {
    expect(temperature(text)).toBe('temperature filter: ' + text);
  });

});
