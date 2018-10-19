//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');
  
    
// db.collection('Users').insertOne({
//   name: 'neeraj',
//   age: 25,
//   location: 'Philadelphia'
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert user', err);
//   }
//   console.log(result.ops);
// });
// //console.log(result.ops[0]._id.getTimestamp());
//...........................................................
  //  db.collection('Users').find({
  //   _id: new ObjectID('5bc9ffb217311825108fcc9d')
  // }).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Users', err);
  // });
 
//...........................................................
  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("5bca00153924653284ca2b40")
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // });
//...........................................................

// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID('5bc9ffb217311825108fcc9d')
// }, {
//   $set: {
//     name: 'Ravi'
//   },
//   $inc: {
//     age: 25
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

//...........................................................

   client.close();
});
