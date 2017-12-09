const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Cook dinner'
});

var newTodo2 = new Todo({
  text: 'Brush your teeth',
  completed: true,
  completedAt: 123
})

newTodo2.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save todo');
});
