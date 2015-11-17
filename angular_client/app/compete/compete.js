angular.module('strava.compete', [])

.controller('CompeteController', function (Data, $scope) {
  // vm = ViewModel
  // var vm = this;
  // vm.data = {};
  $scope.data = {};
  var friendId;

  $scope.getFriendId = function (index) {
    friendId = $scope.data.friends[index].id;
    console.log("Friend Id", friendId);
  };


  var getAthletesStats = function (athleteId) {
    Data.getAthletesStats(athleteId)
    .then(function (resp) {
      console.log('getAthleteStats', resp);
      $scope.data.rideTotalDistance = resp.data.all_ride_totals.distance;
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  var getFriends = function () {
    Data.getFriends()
    .then(function (resp) {
      console.log('getFriends', resp);
      $scope.data.friends = resp.data;
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  var getAthleteProfile = function () {
    Data.getAthleteProfile()
    .then(function (resp) {
      // vm.data.name = resp.data.firstname;
      $scope.data.name = resp.data.firstname;
      $scope.data.image = resp.data.profile;
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  getAthleteProfile();
  getAthletesStats();
  getFriends();
});