(function(){
  'use strict';

  angular
    .module('topFive.search')
        .factory('searchFactory', searchFactory);

  searchFactory.$inject = ['$resource'];
  function searchFactory($resource){
    var searchResource = $resource('/search', {},{
          query: {method:'GET',isArray:true}
      });

    var search = function search(options){
      return searchResource.query(options).$promise;
    }

    return {
      search: search
    };
  };

})();
