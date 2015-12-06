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
    return $http({
      method: 'POST',
      url: '/api/strava/athletesStats',
      data:   {arg: {id: athleteId}}
    });
  };

  var getActivities = function (athleteId) {
    // athleteId = athleteId || 3888371;
    return $http({
      method: 'POST',
      url: '/api/strava/activities'
      // data:   {arg: {id: athleteId}}
    });
  };

  var getAllActivities = function () {
    return $http({
      method: 'GET',
      url: '/api/strava/allActivities',
    });
  }

  var service = {
    getFriends: getFriends,
    getAthleteProfile: getAthleteProfile,
    getAthletesProfile: getAthletesProfile,
    getAthletesStats: getAthletesStats,
    getActivities: getActivities,
    getAllActivities: getAllActivities
  };
  return service;
});