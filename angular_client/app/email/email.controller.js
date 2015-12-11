(function() {
  'use strict';
  
  angular
    .module('strava.email', [])
    .controller('EmailController', EmailController);

  function EmailController ($location, sharedProperties) {
    var vm = this;
    vm.challenger = sharedProperties.getChallenger();

    vm.sendEmail = function () {
      $location.url('/');
    };
  };
})();


