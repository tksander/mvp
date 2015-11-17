angular.module('strava', [
                          'services.auth',
                          'services.data',
                          'strava.compete',
                          'strava.friends',
                          'strava.auth',
                          'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/compete/compete.html',
      controller: 'CompeteController',
      authenticate: false
    })
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/friends', {
      templateUrl: 'app/friends/friends.html',
      controller: 'FriendsController'
    })
    $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  // this is an $httpInterceptor
  // its job is to stop all out going request
  // then look in local storage and find the user's token
  // then add it to the header so the server can validate the request
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.strava');
      if (jwt) {
        object.headers['x-access-token'] = jtw;
      }
      object.headers['Allow-Control-Allow-Origin'] = "*";
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});
