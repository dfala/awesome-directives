angular.module('musicApp');

.factory('httpService', function($http){
  var service = {};

	service.getData = function(artist) {
  return $http({'method': 'JSONP', 'url': 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK' })
    .then(function (data) {
      return data;
    });
  };

  return service;
})
