(function(){
  'use strict';

  angular.module('topFive.search',[])
    .component('resultsCompnent', {
      templateUrl: '/app/search/components/resultsComponentTemplate.html',
      bindings: { onResults: '&'},
      controller: 'resultsComponentController',
      controllerAs: 'vm'
  });

}());
