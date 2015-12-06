var stravaController = require('./stravaController');


module.exports = function (app) {
  // app === userRouter injected from middlware.js

  app.get('/authorize', stravaController.authorize);
  app.get('/login', stravaController.login);
  app.get('/listFriends', stravaController.listFriends);
  app.get('/athleteProfile', stravaController.athleteProfile);
  app.get('/allActivities', stravaController.allActivities);
  app.post('/athletesProfile', stravaController.athletesProfile);
  app.post('/athletesStats', stravaController.athletesStats);
  app.post('/activities', stravaController.activities);
};

