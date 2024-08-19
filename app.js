(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', ['$scope', function ($scope) {
        $scope.lunchMenu = "";
        $scope.message = "";
  
        $scope.checkIfTooMuch = function () {
          var dishes = $scope.lunchMenu.split(',').filter(function (item) {
            return item.trim() !== "";
          });
  
          if (dishes.length === 0) {
            $scope.message = "Please enter data first";
          } else if (dishes.length <= 3) {
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "Too much!";
          }
        };
      }]);
  })();
  