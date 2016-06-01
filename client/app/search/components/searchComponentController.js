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
    // vm.getResults = getResults;
    vm.search = search;

    function search(){
      searchFactory.search(vm.options).then(function(data){

        vm.onSearch({results:data});
        vm.options = {
          type:'',
          query:'',
          limit:20
        };

      });
    }

    // create search function that calls search factory
    // grabs results and calls vm.getResults to calls onSearch
    // REFACTOR: get rid of #getResults and call vm.onSearch directly
  }

})();
