angular.module('services.data', [])

.factory('Data', function ($http) {
  

  var getFriends = function () {
    return $http({
      method: 'GET',
      url: '/api/strava/listFriends'
    });
  };

  var getAthleteProfile = function () {
    return $http({
      method: 'GET',
      url: '/api/strava/athleteProfile'
    });
  };

  var getAthletesProfile = function () {
  athleteId = athleteId || 3888371;
   return $http({
      method: 'POST',
      url: '/api/strava/athletesProfile',
      data:   {arg: {id: athleteId}}
    });
  };

  var getAthletesStats = function (athleteId) {
    athleteId = athleteId || 3888371;
    console.log('in data', athleteId);
    return $http({
      method: 'POST',
      url: '/api/strava/athletesStats',
      data:   {arg: {id: athleteId}}
    });
  };

  var service = {
    getFriends: getFriends,
    getAthleteProfile: getAthleteProfile,
    getAthletesProfile: getAthletesProfile,
    getAthletesStats: getAthletesStats
  };
  return service;
});