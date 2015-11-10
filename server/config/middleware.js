var morgan      = require('morgan'); // used for logging incoming request
var bodyParser  = require('body-parser');
var helpers     = require('./helpers.js'); // our custom middleware


module.exports = function (app, express) {
  console.log('express in exports', express);
  // Express 4 allows us to use multiple routers with their own configurations
  var stravaRouter = express.Router();
  console.log('stravaRouter', stravaRouter);

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../angular_client'));

  app.use('/api/strava', stravaRouter); // use strava router for all stava data requests

  // authentication middleware used to decode token and made available on the request
  //app.use('/api/links', helpers.decode);
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // inject our routers into their respective route files
  require('../strava/stravaRoutes.js')(stravaRouter);
};