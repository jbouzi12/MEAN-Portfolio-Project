(function(){
  'use strict';

  angular.module('topFive.search')
    .controller('searchComponentController', searchComponentCtrl);

  searchComponentCtrl.$inject = ['searchFactory'];

  function searchComponentCtrl(searchFactory){
    var vm = this;
    vm.options = {
      type:'',
      query:'',
      limit:20
    };
    vm.getResults = getResults;

    function getResults(resultsArr){
      vm.onSearch(resultsArr);
    }
  }

})();
