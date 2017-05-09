var mongoose = require('mongoose');

//User schema
var userSchema = mongoose.Schema({
  user_name:{
    type: String,
    required: true
  },
  user_email:{
    type: String,
    required: true
  },
  todo:[
    {
      value: {type: String, required: true},
      created_at: {type: Date, default: Date.now}
    }
  ],
  completed:[
    {
      value: {type: String, required: true},
      created_at: {type: Date, default: Date.now}
    }
  ]
});

//Exposing the model
var User = module.exports = mongoose.model('User', userSchema);

//Get user's todo list
module.exports.getTodoList = function(user_id, callback, limit){
  User.find({_id:user_id}, callback).limit(limit);
}
