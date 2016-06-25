angular.module('musicApp')

.directive('search', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/templates/search.html'
  }
})

.directive('suggestQuery', function () {
  return {
    restrict: 'A',
    controller: function ($scope) {
      $scope.passSuggestion = function (query) {
        $scope.$parent.querySuggestion(query);
      };
    }
  }
})
