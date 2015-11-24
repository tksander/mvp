angular.module('strava.friends', [])

.controller('FriendsController', function (Data, sharedProperties, $scope, $location) {
  $scope.data = {};
  $scope.mouseOver = false;
  var friendId;

  $scope.getFriendId = function (friend) {
    friendId = friend.id;
    console.log("Friend Id", friendId);
  };

  var getFriends = function () {
    Data.getFriends()
    .then(function (resp) {
      console.log('getFriends', resp.data);
      resp.data.splice(3, 1);
      $scope.data.chunkedFriends = chunk(resp.data, 4);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  var chunk = function (array, size) {
    var newArray = [];
    for(var i = 0; i < array.length; i += size) {
      newArray.push(array.slice(i, i + size));
    }
    return newArray;
  };

  $scope.goToEmail = function (friend) {
    sharedProperties.setChallenger(friend);
    $location.url('/email');
  };

  getFriends();
});