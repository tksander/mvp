(function() {
  'use strict';

  angular
    .module('strava.compete', [])
    .controller('CompeteController', CompeteController);

   function CompeteController (Data, sharedProperties) {
    var vm = this;
    vm.challenger = sharedProperties.getChallenger();
    vm.data = {};
    vm.rideData = [];
    var friendId;

    vm.getFriendId = function (index) {
      friendId = vm.data.friends[index].id;
      console.log("Friend Id", friendId);
    };


    var getAthletesStats = function (athleteId) {
      Data.getAthletesStats(athleteId)
      .then(function (resp) {
        // console.log('getAthleteStats', resp);
        vm.rideData.push({
          distance: resp.data.all_ride_totals.distance,
          activity: 'ride'
        });
        vm.rideData.push({
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
        vm.data.name = resp.data.firstname;
        vm.data.image = resp.data.profile;
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
  };

})();