'use strict';

describe('Controller: WeatherCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherAngularApp'));

  var WeatherCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeatherCtrl = $controller('WeatherCtrl', {
      $scope: scope
    });
  }));

  it('should set default temperature type to Celsius', function () {
    expect(scope.tempType).toBe('C');
  });
});
