angular.module('strava.compete', [])

.controller('CompeteController', function (Data) {
  // vm = ViewModel
  var vm = this;



  var getAthleteProfile = function () {
    Data.getAthleteProfile()
    .then(function (resp) {
      console.log(resp);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  getAthleteProfile();

});