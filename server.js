var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var methodOverride = require('method-override');
var config = require('./app/config/config');

//Test related dependencies
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
require('sinon-mongoose');

//Express instance creation
var app = express();

//Requiring routes
require('./app/router/router')(app);

//Configuring express middleware
app.use(morgan('dev')); //Log requests to console
app.use(bodyParser.urlencoded({'extended':'true'})); //parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); //parse application/vnd.api+json as json
app.use(methodOverride());

//Requring user model
User = require('./app/models/user');

//Connect to mongoose
mongoose.connect(config.db);
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + config.db);
});
var db = mongoose.connection;

app.listen(config.port, function(err){
    if (err) throw err;
    console.log('Running on port ' + config.port);
});

//Exporting app to be used anywere
module.exports = app;
