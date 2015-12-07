(function() {
  'use strict';

  angular
    .module('strava.friends', [])
    .controller('FriendsController', FriendsController);

  function FriendsController (Data, sharedProperties, ngProgressFactory, $scope, $location) {
    $scope.data = {};
    $scope.mouseOver = false;
    $scope.progressbar = ngProgressFactory.createInstance();
    var friendId;

    $scope.getFriendId = function (friend) {
      friendId = friend.id;
      console.log("Friend Id", friendId);
    };

    var getFriends = function () {
      $scope.progressbar.start();
      Data.getFriends()
      .then(function (resp) {
        console.log('getFriends', resp.data);
        resp.data.splice(3, 1);
        $scope.data.chunkedFriends = chunk(resp.data, 4);
        $scope.progressbar.complete()
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
  };
})();
