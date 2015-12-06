(function() {
  'use strict';

  angular.module('strava.compete', [])

  .controller('CompeteController', function (Data, sharedProperties, $scope) {
    // This is 
    $scope.challenger = sharedProperties.getChallenger();
    $scope.data = {};

    $scope.data = [];

    var friendId;

    $scope.getFriendId = function (index) {
      friendId = $scope.data.friends[index].id;
      console.log("Friend Id", friendId);
    };


    var getAthletesStats = function (athleteId) {
      Data.getAthletesStats(athleteId)
      .then(function (resp) {
        // console.log('getAthleteStats', resp);
        $scope.data.push({
          distance: resp.data.all_ride_totals.distance,
          activity: 'ride'
        });
        $scope.data.push({
          distance: resp.data.all_run_totals.distance,
          activity: 'run'
        });
      })
      .catch(function (error) {
        console.log(error);
      })
    };

    var getActivities = function (athleteId) {
      Data.getActivities(athleteId)
      .then(function (resp) {
        console.log('getActivities', resp);
      })
      .catch(function (error) {
        console.log(error);
      })
    };

    var getAthleteProfile = function () {
      Data.getAthleteProfile()
      .then(function (resp) {
        console.log('athelete profile:  ', resp);
        // vm.data.name = resp.data.firstname;
        $scope.data.name = resp.data.firstname;
        $scope.data.image = resp.data.profile;
      })
      .catch(function (error) {
        console.log(error);
      });
    };

    var getAllActivities = function () {
      Data.getAllActivities()
        .then(function (resp) {
          console.log('activities! : ', resp);
        })
        .catch(function (error) {
          console.log(error);
        })
    };

    getAllActivities();
    getAthleteProfile();
    getAthletesStats();
  });
})();