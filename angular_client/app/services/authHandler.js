angular.module('services.auth', [])

.factory('Auth', function ($http, $location, $window) {

  var service = {
    signin: signin,
    isAuth: isAuth,
    signout: signout
  };
  return service;

  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  // var signup = function (user) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/users/signup',
  //     data: user
  //   })
  //   .then(function (resp) {
  //     return resp.data.token;
  //   });
  // };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.strava');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.strava');
    $location.path('/signin');
  };
});