(function(){
  'use strict';

  angular.module('topFive.search',[])
    .component('searchComponent', {
      templateUrl: 'searchComponentTemplate.html',
      bindings: { onUpdate: '&', results:'<' },
      controller: 'searchComponentController',
      controllerAs: 'vm'
  });

}());
