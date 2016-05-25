(function(){
  'use strict';

  angular.module("topFive.home")
    .controller('Home', Home);

  function Home(){
    var vm = this;
    vm.name = "Home Controller";
  }
});
