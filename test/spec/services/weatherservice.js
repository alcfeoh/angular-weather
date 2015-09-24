'use strict';

describe('Service: WeatherService', function () {

  // load the service's module
  beforeEach(module('angularWeatherApp'));

  // instantiate service
  var WeatherService;
  beforeEach(inject(function (_WeatherService_) {
    WeatherService = _WeatherService_;
  }));

  it('should do something', function () {
    expect(!!WeatherService).toBe(true);
  });

});
