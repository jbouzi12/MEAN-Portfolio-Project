(function(){
  'use strict';

  angular.module("topFive.home")
    .controller('HomeCtrl', Home);

  function Home(){
    var vm = this;
    vm.name = "Home Controller";
  }
})();
