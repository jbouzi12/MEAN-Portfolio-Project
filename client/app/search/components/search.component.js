(function(){
  'use strict';

  angular.module('topFive.search',[])
    .component('searchComponent', {
      templateUrl: '/app/search/components/searchComponentTemplate.html',
      bindings: { onSearch: '&'},
      controller: 'searchComponentController',
      controllerAs: 'vm'
  });

}());
