var request = require('request');
var strava = require('strava-v3');


var requestURL = strava.oauth.getRequestAccessURL({approval_prompt: 'force'});


module.exports = {


  // Redirect for OAuth Route
  authorize: function (req, res, next) {
      res.redirect(requestURL);
  },

  // OAuth Route
  login: function (req, res, next) {
    var queryObject = url.parse(req.url,true).query;
    queryCode = queryObject.code;

    strava.oauth.getToken(queryObject.code, function (req, tokenQuery) {
      res.redirect('/')
    })
  },

  listFriends: function (req, res, next) {
    var args = req.args || {};
    strava.athlete.listFriends(args, function(err, payload) {
      if(!err) {
         // console.log(payload);
      }
      else {
         next(err);
      }
      res.send(payload);
    });
  },

  athleteProfile: function (req, res, next) {
      var args = req.arg || {};
      strava.athlete.get(args, function(err, payload) {
        if(!err) {
           // console.log(payload);
        }
        else {
           next(err);
        }
        res.send(payload);
      });
  },

  athletesProfile: function (req, res, next) {
    var args = req.body.arg || {id: 3888371};
    strava.athletes.get(args, function(err, payload) {
      if(!err) {
         // console.log(payload);
      }
      else {
         next(err);
      }
      res.send(payload);
    });
  },

  athletesStats: function (req, res, next) {
    // Hard coded to default to own user
    var args = req.body.arg || {id: 3888371};
    strava.athletes.stats(args, function(err, payload) {
      if(!err) {
         console.log(payload);
      }
      else {
         next(err);
      }
      res.send(payload);
    });
  }
};