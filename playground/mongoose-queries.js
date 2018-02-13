const {ObjectId} =require('mongodb');
const {mongoose}=require('./../server/db/mongoose');

const{Todo}=require('./../server/models/todo');
const{User}=require('./../server/models/user');

var id ='5a8101ed1dae787809cb67e5';
var uid='5a80e6c789e3957801e8bc48';
// if(!ObjectId.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos:',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo:',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo)
//   {
//     return console.log('id not found');
//   }
//   console.log('Todo by ID:',todo);
// }).catch((e)=>console.log(e));


User.findById(uid).then((user)=>{
  if(!user)
  {
    return console.log('user not found');
  }
  console.log('Todo by ID:',user);
}).catch((e)=>console.log(e));
