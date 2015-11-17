var express = require('express');
var app = express();
// var mongoose = require('mongoose');

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

////////////////////////////////////
//      MongoDB Server 
////////////////////////////////////

// connect to mongo database named strava
/*
mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost/strava';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports = db;

*/


////////////////////////////////////
//      Server Start 
/////////////////////////////////////

var port = process.env.PORT || 4568;
app.listen(port);
console.log('Server now listening on port ' + port);

module.exports = app;
