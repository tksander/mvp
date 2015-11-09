var request = require('request');

module.exports = {

  // Redirect for OAuth Route
  authorize: function () {
    request.get('/authorize', function(req, res) {
      res.redirect(requestURL);
    });
  },

  // OAuth Route
  login: function () {
    request.get('/login', function(req, res) {

      var queryObject = url.parse(req.url,true).query;
      queryCode = queryObject.code;

      strava.oauth.getToken(queryObject.code, function (req, tokenQuery) {
        console.log('access token', tokenQuery.access_token);
        res.redirect('/')
      })
    });
  },

  listFriends: function () {
    request.get('/listFriends', function (req, res, args) {
      var args = req.args || {};
      strava.athlete.listFriends(args, function(err, payload) {
        if(!err) {
           console.log(payload);
        }
        else {
           console.log(err);
        }
        res.send(payload);
      });
    });
  },

  athleteProfile: function () {
    request.get('/athleteProfile', function (req, res) {
      var args = req.arg || {};
      strava.athlete.get(args, function(err, payload) {
        if(!err) {
           console.log(payload);
        }
        else {
           console.log(err);
        }
        res.send(payload);
      });
    });
  },

  athletesProfile: function () {
    request.get('/athletesProfile', function (req, res) {
      var args = req.arg || {id: 3888371};
      strava.athletes.get(args, function(err, payload) {
        if(!err) {
           console.log(payload);
        }
        else {
           console.log(err);
        }
        res.send(payload);
      });
    });
  },

  atheleteStats: function () {
    request.get('/athleteStats', function (req, res) {
      // Hard coded to default to own user
      var args = req.arg || {id: 3888371};
      strava.athletes.stats(args, function(err, payload) {
        if(!err) {
           console.log(payload);
        }
        else {
           console.log(err);
        }
        res.send(payload);
      });
    });
  }
};