// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectId('5a2be6698ac45e0bd4311016')
//   }, {
//     $set: {
//       completed: false
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectId('5a2bd48e0adcdd0ed452989b')
}, {
  $set : {
    name: 'Anil',
  },
  $inc: {
    age: 1
  }
} ,{
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // db.close();
});
