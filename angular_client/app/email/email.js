angular.module('strava.email', [])

.controller('EmailController', function ($scope, $location, sharedProperties) {
  $scope.challenger = sharedProperties.getChallenger();

  $scope.sendEmail = function () {
    $location.url('/');
  };

});
