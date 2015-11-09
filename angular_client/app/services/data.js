angular.module('services.data', [])

.factory('Data', function ($http) {
  

  var getFriends = function () {
    $http({
      method: 'GET',
      url: '/api/listFriends'
    })
    .then(function (resp) {
      return resp.data;
    })
    .catch(function (error) {
      return error;
    });
  };

  var getAthleteProfile = function () {
    return $http({
      method: 'GET',
      url: '/api/athleteProfile'
    })
    .then(resp)
    .catch(error)

  };

  var getAthletesProfile = function () {
    $http({
      method: 'GET',
      url: '/api/athletesProfile'
    })
    .then(function (resp) {
      return resp.data;
    })
    .catch(function (error) {
      return error;
    });
  };

  var getAtheleteStats = function () {
    $http({
      method: 'GET',
      url: '/api/athleteStats'
    })
    .then(function (resp) {
      return resp.data;
    })
    .catch(function (error) {
      return error;
    });
  };

  var service = {
    getFriends: getFriends,
    getAthleteProfile: getAthleteProfile,
    getAthletesProfile: getAthletesProfile,
    getAtheleteStats: getAtheleteStats
  };
  return service;
});