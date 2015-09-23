'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('MainCtrl', function () {
    this.locations = [ ];

      this.addLocation = function(zipcode){
        this.locations.push(zipcode);
      }
  });
