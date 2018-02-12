// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to mongodb server');


//   db.collection('Todos').findOneAndUpdate({
//     _id:new ObjectID('5a80cbd2ef8ca9da68309275')},
//     {
//       $set:{
//         completed:true
//       }
//     },{returnOriginal: false}
// ).then((result)=>{
//   console.log(result);
// });
//5a80cbd2ef8ca9da68309275

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5a80c788ef8ca9da683090ed')},
  {
    $set:{
      name:'Michael'
    },
    $inc:{
      age:-1
    }
  },{returnOriginal: false}
).then((result)=>{
console.log(result);
});


  //db.close();
});
