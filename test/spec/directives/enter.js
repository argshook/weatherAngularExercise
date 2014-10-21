'use strict';

describe('Directive: enter', function() {
  var element, scope, compile, defaultData,
      validTemplate = '<my-dir ng-model="data"></my-dir>';

  function createDirective(data, template) {
    var elm;

    scope.data = data || defaultData;

    elm = compile(template || valideTemplate)(scope);

    return elm;
  }

  beforeEach(function() {
    module('weatherAngularApp');

    defaultData = 42;

    inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      compile = $compile;
    });
  });

  describe('when created', function() {
    it('should do something', function() {
      expect(true).toBe(true);
    });
  });
});
