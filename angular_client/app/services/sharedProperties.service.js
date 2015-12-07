(function() {
  'use strict';

  angular
    .module('strava.sharedProperties', [])
    .service('sharedProperties', sharedProperties);

  function sharedProperties () {
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
  };
})();
