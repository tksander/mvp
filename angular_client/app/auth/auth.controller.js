(function() {
  'use strict';

  angular
    .module('strava.auth', [])
    .controller('AuthController', AuthController); 

  function AuthController ($window, $location, Auth) {
    var vm = this;
    vm.user = {};

    vm.signin = function () {
      Auth.signin(vm.user)
        .then(function (token) {
          $window.localStorage.setItem('com.strava', token);
          $location.path('/compete');
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    vm.signup = function () {
      Auth.signup(vm.user)
        .then(function (token) {
          $window.localStorage.setItem('com.strava', token);
          $location.path('/compete');
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  };

})();
