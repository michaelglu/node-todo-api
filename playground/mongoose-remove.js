const {ObjectId} =require('mongodb');
const {mongoose}=require('./../server/db/mongoose');

const{Todo}=require('./../server/models/todo');
const{User}=require('./../server/models/user');

Todo.remove({}).then((result)=>{
  console.log(result);
});
//Todo.findOneAndRemove();
//Todo.findByIdAndRemove();
//5a824a7ab48d7a0d78348d98

// Todo.findByIdAndRemove("5a824a7ab48d7a0d78348d98").then((todo)=>{
//   console.log(todo);
// });
