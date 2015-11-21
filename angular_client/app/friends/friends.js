angular.module('strava.friends', [])

.controller('FriendsController', function (Data, $scope) {
  $scope.data = {};
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

  // $scope.$watch('data.chunkedFriends', function(val) {
  //   $scope.data = [].concat.apply([], val);
  // }, true); // deep watch


  getFriends();
  $scope.data.challenge = '';
})
.directive('friendpic', [function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="overlay"><img class="friend_pic" src= " {{ friend.profile }}"  alt="Profile Picture"></div>',
    link: function (scope, elm, attrs) {
      elm
        .on('mouseenter', function () {
          console.log('elm',elm);
          elm.find('img').css({ '': 'rgba(0,0,0,.5)'
          });
          console.log('mouseenter');
        })
        .on('mouseleave', function () {
          elm.css('color', 'white');
          console.log('mouseleave');
        });
    }
  };
}]);