'use strict';

/**
 * @ngdoc service
 * @name angularWeatherApp.WeatherService
 * @description
 * # WeatherService
 * Service in the angularWeatherApp.
 */
angular.module('angularWeatherApp')
  .service('WeatherService', function ($resource) {
    return $resource('http://api.openweathermap.org/data/2.5/weather?zip=:zipcode,us&units=imperial"', {zipcode: null});
  });
