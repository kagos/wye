var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/wye';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
var router = express.Router();

router.route('/excuses').get(function(req, res) {
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection("excuses");
    collection.find().toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else if (result.length) {
        res.send(result);
      } else {
        res.send([]);
      }
    });
  });
});

router.route('/alibis').get(function(req, res) {
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection("alibis");
    collection.find().toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else if (result.length) {
        res.send(result);
      } else {
        res.send([]);
      }
    });
  });
});

app.use('/api', router);
app.listen(PORT);

console.log('Server started on ' + PORT);
