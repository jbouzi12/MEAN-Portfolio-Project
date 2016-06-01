(function(){
  'use strict';

  angular.module('topFive.home')
    .controller('HomeCtrl', Home);

  function Home(){
    var vm = this;
    vm.name = "My Top 5";
    vm.description = "Discover new albums, document your favorites, and enjoy with your peers";
    vm.onSearch = onSearch;
    vm.results = [];

    function onSearch(results){
      vm.results = results;
    }
  }

})();
