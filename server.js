var express = require('express');
var http = require('http');
var path = require('path');
var request = require('request');

var app = express();
console.log(__dirname + '/index.html');
// app.use(express.static(__dirname + '/assets/*'));
// app.use(express.static(__dirname + '/css/*'));
// app.use(express.static(__dirname + '/js/**/*'));
app.use(express.static(__dirname + '/public'));
console.log(__dirname + '/public');




////////////////////////////////////
//      Authorization 
////////////////////////////////////

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


////////////////////////////////////
//      Paths 
////////////////////////////////////

// // Home page
// app.get('/', function(req, res) {
//   res.render('index')
// });


// Route for strava auth
// This should be on click on button - client side, send get request
app.get('/authorize', function(req, res) {
  res.redirect(redirectPath);
});

// Setup route for redirect
app.get('/login', function(req, res) {
  res.send('you\'ve arrived');
});

// Get request 
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("found") // Show the HTML for the Google homepage. 
  }
})

////////////////////////////////////
//      Server Start 
/////////////////////////////////////

console.log('MVP Server is listening on 4568');
app.listen(4568);


