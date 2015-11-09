var stravaController = require('./stravaController');
var strava = require('strava-v3');

////////////////////////////////////
//      Authorization 
////////////////////////////////////
/*

// Strava credentials
var clientId = '8126'

// Build Strava redirect path
var redirectPath = 'https://www.strava.com/oauth/authorize?';
// var redirectUrl = 'http://localhost:4568/login';
var redirectUrl = 'http://127.0.0.1:4568/login';

redirectPath += "client_id=" + clientId;
redirectPath += '&response_type=code'
redirectPath += '&redirect_uri=' + redirectUrl;
redirectPath += '&approval_prompt=force';
*/

var requestURL = strava.oauth.getRequestAccessURL({approval_prompt: 'force'});


module.exports = function (app) {
  // app === userRouter injected from middlware.js

  app.get('/authorize', stravaController.authorize);
  app.get('/login', stravaController.login);
  app.get('/listFriends', stravaController.listFriends);
  app.get('/athleteProfile', stravaController.athleteProfile);
  app.get('/athletesProfile', stravaController.athletesProfile);
  app.get('/athletesStats', stravaController.athletesStats);
};

