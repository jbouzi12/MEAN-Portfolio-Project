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
      // should capture results array and set it to "results"
      // object in home ctrl
      vm.onSearch(resultsArr);
    }
    // create search function that calls search factory
    // grabs results and calls vm.getResults to calls onSearch
    // REFACTOR: get rid of #getResults and call vm.onSearch directly
  }

})();
