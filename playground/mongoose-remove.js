const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIDAndRemove


Todo.findByIdAndRemove('590e1ac576d2911cce6db396').then((todo) => {
    console.log(todo);
});
