angular.module('musicApp')

.controller('mainController', function ($scope, httpService) {
  $scope.queries = [];
  $scope.songs = [];

  $scope.searchSong = function (query) {
    httpService.getData(query)
    .then(function(response) {
      console.info(response);

      if (response.data.results && response.data.results.length > 0) {
        $scope.queries.push(query);
        $scope.query = '';
      } else {
        alertify.log('There are no results. We are so sorry.');
      }

      $scope.songs = response.data.results;
      $scope.openSuggestors = false;
    })
    .catch(function (err) {
      alertify.error('There was a problem with your request.');
    })
  };

  $scope.querySuggestion = function (suggestion) {
    $scope.query = suggestion;
    $scope.searchSong(suggestion);
  };
});
