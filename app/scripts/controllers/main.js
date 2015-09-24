'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('MainCtrl', function ($http) {
    this.locations = [ ];
    var locations = this.locations;

    this.addLocation = function(zipcode){
      $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&units=imperial").
        then(function(response) {
          var newLocation = {zip: zipcode, weather: response.data.weather[0], temp: response.data.main, name: response.data.name};
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
