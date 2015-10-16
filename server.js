////////////////////////////////////
//      Require 
////////////////////////////////////

var express = require('express');
var http = require('http');
var path = require('path');
var request = require('request');
var strava = require('strava-v3');
var querystring = require('querystring');
var url = require('url');
var mongoose = require('mongoose');

var app = express();

// app.use(express.static(__dirname + '/assets/*'));
// app.use(express.static(__dirname + '/css/*'));
// app.use(express.static(__dirname + '/js/**/*'));
app.use(express.static(__dirname + '/public'));

////////////////////////////////////
//      MongoDB Server 
////////////////////////////////////

// connect to mongo database named strava
mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost/strava';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports = db;



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



////////////////////////////////////
//      Routes 
////////////////////////////////////

// Redirect for OAuth Route
app.get('/authorize', function(req, res) {
  res.redirect(requestURL);
});

// OAuth Route
app.get('/login', function(req, res) {

  var queryObject = url.parse(req.url,true).query;
  queryCode = queryObject.code;

  strava.oauth.getToken(queryObject.code, function (req, tokenQuery) {
    console.log('access token', tokenQuery.access_token);
    res.redirect('/')
  })
});

app.get('/listFriends', function (req, res, args) {
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

app.get('/athleteProfile', function (req, res) {
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

app.get('/athletesProfile', function (req, res) {
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

app.get('/athleteStats', function (req, res) {
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


////////////////////////////////////
//      Server Start 
/////////////////////////////////////

var port = process.env.PORT || 4568;
app.listen(port);
console.log('Server now listening on port ' + port);


