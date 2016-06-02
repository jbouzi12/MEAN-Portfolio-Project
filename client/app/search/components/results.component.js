(function(){
  'use strict';

  angular.module('topFive.results',[])
    .component('resultsComponent', {
      templateUrl: '/app/search/components/resultsComponentTemplate.html',
      bindings: { results: '<'},
      controller: 'resultsComponentController',
      controllerAs: 'vm'
  });

}());
