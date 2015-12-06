var request = require('request');
var strava = require('strava-v3');
var token = require('../../localTokens.js');


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
    strava.athlete.listFriends(args, function (err, payload) {
      if(!err) {
         // console.log(payload);
      } else {
         next(err);
      }
      res.send(payload);
    });
  },

  athleteProfile: function (req, res, next) {
      var args = req.arg || {id: 3888371};
      strava.athlete.get(args, function (err, payload) {
        if(!err) {
           // console.log(payload);
        } else {
           next(err);
        }
        res.send(payload);
      });
  },

  athletesProfile: function (req, res, next) {
    var args = req.body.arg || {id: 3888371};
    strava.athletes.get(args, function (err, payload) {
      if(!err) {
         // console.log(payload);
      } else {
         next(err);
      }
      res.send(payload);
    });
  },

  athletesStats: function (req, res, next) {
    var args = req.body.arg || {id: 3888371};
    strava.athletes.stats(args, function (err, payload) {
      if(!err) {
         console.log(payload);
      } else {
         next(err);
      }
      res.send(payload);
    });
  },

  activities: function (req, res, next) {
    var args = req.body.arg || {};
    strava.activities.get(args, function (err, payload) {
      if(!err) {
        console.log('actitivies:  ', payload);
      } else{
        next(err);
      }
      res.send(payload);
    })
  },

  allActivities: function (req, res, next) {
    options = {
      url: 'https://www.strava.com/api/v3/athlete/activities',
      json: true,
      headers: {
        Authorization: 'Bearer ' + token.access_token
      }
    };

    request(options, function (err, response, payload) {

       if (!err) {
           console.log(payload);
           res.send(payload);
       }
       else {
           console.log('api call error');
           console.log(err);
       }
    });

  }

};