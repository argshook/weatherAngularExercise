'use strict';

describe('Filter: temperature', function () {

  var temperatureFilter;

  // load the filter's module
  beforeEach(function () {
    module('weatherAngularApp');

    inject(function($filter) {
      temperatureFilter = $filter('temperature');
    });
  });

  it('should exists', function () {
    expect(!!temperatureFilter).toBe(true);
  });

  describe('when evaluating an expression', function() {
    it('should return -274 C for 0 K', function() {
      expect(temperatureFilter(0, 'C')).toBe(-274);
    });
    it('should return 15 C for 288.15 K', function() {
      expect(temperatureFilter(288.15, 'C')).toBe(15);
    });
    it('should return 68 F for 293.15 K', function() {
      expect(temperatureFilter(293.15, 'F')).toBe(68);
    });
  });

});
