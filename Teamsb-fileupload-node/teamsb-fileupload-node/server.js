const express = require('express');
const app = express();
//var bodyParser = require('body-parser');

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
 
let router = require('./app/routers/s3.router.js');
app.use('/', router);
 
// Create a Server
const server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})




var MongoClient = require('mongodb').MongoClient;
var assert=require('assert');
//const { route } = require('./app/routers/s3.router.js');
//const { mongo } = require('mongoose');
const { error } = require('console');

const url = 'mongodb://127.0.0.1:27017'

const dbName = 's3_fileupload'
let db

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)

  // Storing a reference to the database so you can use it later
  db = client.db(dbName)
  console.log(`Connected MongoDB: ${url}`)
  console.log(`Database: ${dbName}`)
})

//router.post('/insert', function (req, res, next) {
router.post('/api/files/upload', function (req, res, next) {

  var item = {
    file_name: req.file.originalname
  };

  mongo.connect(url, function (err, db) {
    assert.equal(null, err);
    db.collection('file-data').insertOne(item, function (err, result) {
      assert.equal(null, error);
      console.log('Item Inserted!');
      db.close();
    });


  });
});
