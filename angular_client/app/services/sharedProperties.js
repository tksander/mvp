angular.module('services.sharedProperties', [])
  .service('sharedProperties', function () {
    var challenger = null;

      var getChallenger = function () {
        return challenger;
      };

      var setChallenger = function (challengerObject) {
        challenger = challengerObject;
      };

      return {
        getChallenger: getChallenger,
        setChallenger: setChallenger
      };
  })