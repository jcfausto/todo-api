var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var methodOverride = require('method-override');
var config = require('./app/config/config');

//Configuring express middleware
app.use(morgan('dev')); //Log requests to console
app.use(bodyParser.urlencoded({'extended':'true'})); //parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); //parse application/vnd.api+json as json

//Requring user model
User = require('./app/models/user');

//Connect to mongoose
mongoose.connect(config.db);
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + config.db);
});
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Please use /api/members/:member_id');
});

app.get('/api/members/:user_id', function(req, res){
  User.getTodoList(req.params['user_id'], function(err, users){
    if (err) {
      res.send('Nothing found!');
      //throw err;
    }
    res.json(users);
  })
});

app.listen(config.port, function(err){
    if (err) throw err;
    console.log('Running on port ' + config.port);
});
