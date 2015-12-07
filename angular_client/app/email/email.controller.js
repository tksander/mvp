(function() {
  'use strict';
  
  angular
    .module('strava.email', [])
    .controller('EmailController', EmailController);

  function EmailController ($scope, $location, sharedProperties) {
    $scope.challenger = sharedProperties.getChallenger();

    $scope.sendEmail = function () {
      $location.url('/');
    };
  };
})();


