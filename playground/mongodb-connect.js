// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to mongodb server');

//   db.collection('Todos').insertOne({
//     text:'Something to do',completed:false
//
//   },(err,result)=>{
//     if(err){
//       return console.log('Unable to insert todo',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
//   });
// Insert new doc into User collection

// db.collection('Users').insertOne({
//   name:'Michael',age:18,location:'Durham'
//
// },(err,result)=>{
//   if(err){
//     return console.log('Unable to insert user',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });

  db.close();
});
