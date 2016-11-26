(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.foods = "";
  $scope.message = "hello there";

  $scope.checkFoods = function () {

    if ($scope.foods == "")
      $scope.message = "Please enter data first.";
    else if (checkIfTooMuch($scope.foods))
      $scope.message = "Too Much!";
    else
      $scope.message = "Enjoy!";
  };

function checkIfTooMuch(string) {
    var isTooMuch = false;
    var tokens = string.split(',');
    if (tokens.length > 3)
    {
      isTooMuch = true;
    }

    return isTooMuch;
  }

}

})();
