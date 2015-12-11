angular.module('strava', [
                          // Inject client modules
                          'strava.auth',
                          'strava.data',
                          'strava.sharedProperties',
                          'strava.compete',
                          'strava.friends',
                          'strava.email',
                          'services.auth',  // TODO: Collapse services into Services module
                          'strava.d3',
                          'strava.directives',
                          // Inject 3rd-party modules
                          'ngRoute',
                          'ngProgress',
                          'ui.router'
])
// executed during provider registrations and configuration phase
.config(function ($stateProvider, $httpProvider) {
  $stateProvider
    .state('compete', {
      url: '/',
      templateUrl: 'app/compete/compete.html',
      controller: 'CompeteController',
      controllerAs: 'compete',
      authenticate: false
    })
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController',
      controllerAs: 'auth'
    })
    .state('friends', {
      url: '/friends',
      views: {
        'nav': {
          templateUrl: 'app/navbar/navbar.html',
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        '': {
          templateUrl: 'app/friends/friends.html',
          controller: 'FriendsController',
          controllerAs: 'friends'
        }
      }
    })
    .state('email', {
      url: '/email',
      templateUrl: 'app/email/email.html',
      controller: 'EmailController',
      controllerAs: 'email'
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
