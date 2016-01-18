(function() {
  'use strict';

  angular
    .module('strava.friends', [])
    .controller('FriendsController', FriendsController);

  function FriendsController (Data, sharedProperties, $location) {
    var vm = this;
    vm.data = {};
    // vm.progressbar = ngProgressFactory.createInstance();
    var friendId;

    vm.getFriendId = function (friend) {
      friendId = friend.id;
    };

    var getFriends = function () {
      // vm.progressbar.start();
      Data.getFriends()
      .then(function (resp) {
        resp.data.splice(3, 1);
        vm.data.chunkedFriends = chunk(resp.data, 4);
        vm.progressbar.complete()
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

    vm.goToEmail = function (friend) {
      sharedProperties.setChallenger(friend);
      $location.url('/email');
    };

    getFriends();
  };
})();
