(function(){
  'use strict';

  angular.module('topFive.search',[])
    .component('searchComponent', {
      templateUrl: 'searchComponentTemplate.html',
      bindings: { onSearch: '&'},
      controller: 'searchComponentController',
      controllerAs: 'vm'
  });

}());
