'use strict';

/**
 * @ngdoc directive
 * @name angularWeatherApp.directive:WeatherWidget
 * @description
 * # WeatherWidget
 */
angular.module('angularWeatherApp')
  .directive('weatherWidget', function () {
    return {
      templateUrl: 'views/widget.html',
      restrict: 'E',
      scope: {
        loc: '=location',
        onDelete: "="
      },
      controller: function($scope) {
          $scope.getWeatherIcon = function(forecast){
            var url = "https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/";
            if (forecast.id >= 200 && forecast.id <= 232)
              return url + "art_storm.png";
            else if (forecast.id >= 501 && forecast.id <= 511)
              return url + "art_rain.png";
            else if (forecast.id === 500 || (forecast.id >= 520 && forecast.id <= 531))
              return url + "art_light_rain.png";
            else if (forecast.id >= 600 && forecast.id <= 622)
              return url + "art_snow.png";
            else if (forecast.id >= 801 && forecast.id <= 804)
              return url + "art_clouds.png";
            else if (forecast.id === 741 || forecast.id === 761)
              return url + "art_fog.png";
            else
              return url + "art_clear.png";

          }
      }
    };
  });
