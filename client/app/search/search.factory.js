(function(){
  'use strict';

  angular
    .module('topFive.searchFactory')
        .factory('searchFactory', searchFactory);

  function searchFactory($resource){
    var searchResource = $resource('http://localhost:8080/search/');

    var search = function search(options){
      return searchResource.query(options).$promise;
    }
  };

});