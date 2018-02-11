// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to mongodb server');

//deleteMany
// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });
//deleteOne
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((res)=>{
//   console.log(res);
// });
//findOneandDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
//   console.log(res);
// });

db.collection('Users').deleteMany({name:'Michael'}).then((result)=>{
   console.log(result);
 });


 db.collection('Users').findOneAndDelete({
   _id:new ObjectID("5a80c75eef8ca9da683090dd")
 }).then((res)=>{
    console.log(res);
 });



  //db.close();
});
