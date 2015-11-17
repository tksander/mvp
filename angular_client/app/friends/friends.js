angular.module('strava.friends', [])

.controller('FriendsController', function (Data, $scope) {
  $scope.data = {};
  var friendId;

  $scope.getFriendId = function (index) {
    friendId = $scope.data.friends[index].id;
    console.log("Friend Id", friendId);
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

  getFriends();
});