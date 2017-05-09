var User = require('../models/user');
var UserController = require('../controllers/user.controller')(User);

module.exports = function(app) {
  app.get('/', function(req, res){
    res.send('Nothing to see here.');
  });

  //app.get('/api/members/:member_id', UserController.GetTodolist);

  //app.post('/api/todo', UserController.PostTodo);

  //app.put('/api/todo/:todo_id', UserController.UpdateTodo);

  //app.delete('/api/todo/:todo_id', UserController.DeleteTodo);
}
