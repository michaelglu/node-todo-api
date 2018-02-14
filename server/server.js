const _=require('lodash');
const express=require('express');
const {ObjectId} =require('mongodb');
const bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var{Todo}=require('./models/todo');
var{User}=require('./models/user');


var app=express();
const port=process.env.PORT||3000;
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
var todo= new Todo({
  text:req.body.text
});

todo.save().then((doc)=>{
  res.send(doc)
},(e)=>{
  res.status(400).send(e);
});
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});


app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectId.isValid(id)){
    return res.send(404);
  }
  Todo.findById(id).then((todo)=>{
    if(!todo)
    {
      res.send(400);
    }
    res.send(todo);
  }).catch((e)=>res.send(404));
});


app.delete('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectId.isValid(id)){
    return res.send(404);
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo)
    {
      res.send(400);
    }
    res.send({todo});
  }).catch((e)=>res.send(404));
});


app.patch('/todos/:id',(req,res)=>{
    var id=req.params.id;
    var body=_.pick(req.body,['text','completed']);
    if(!ObjectId.isValid(id)){
      return res.send(404);
    }
    if(_.isBoolean(body.completed)&&body.completed)
    {
      body.completedAt=new Date().getTime();
    }else{
      body.completed=false;
      body.completedAt=null;
    }
    Todo.findByIdAndUpdate(id,{$set: body},{new:true})
    .then((todo)=>{
      if(!todo){
        return res.status(404).send();
      }
      res.send(todo);
    }).catch((e)=>{
      res.status(400).send();
    })

});


app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    //console.log(user);
    res.header('x-auth',token).send({"email":user.email,
  "id":user._id});
  }).catch((e) => {
    res.status(400).send(e);
  })
});


app.listen(port,()=>{
  console.log(`Started on port ${port}`);
});



module.exports={app};
