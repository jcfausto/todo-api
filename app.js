var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Requring user model
User = require('./models/user');

//Connect to mongoose
mongoose.connect('mongodb://localhost/tododb');
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Please use /api/list');
});

app.get('/api/list/:user_id', function(req, res){
  User.getTodoList(req.params['user_id'], function(err, users){
    if (err) {
      res.send('Nothing found!');
      //throw err;
    }
    res.json(users);
  })
});

app.listen(3000);
console.log('Running on port 3000');
