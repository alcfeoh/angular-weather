'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('MainCtrl', function (WeatherService) {
    this.locations = [ ];
    var locations = this.locations;

    this.addLocation = function(zipcode){
      WeatherService.get({zipcode: zipcode}, function(response) {
          var newLocation = {zip: zipcode, weather: response.weather[0], temp: response.main, name: response.name};
          locations.push(newLocation);
        });
    }

    this.removeLocation = function(zipcode){
      angular.forEach(locations, function(value, index) {
        if (value.zip === zipcode)
          locations.splice(index, 1);
      }
      );
    }

  });
