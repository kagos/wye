const Promise = require('bluebird');
const MongoClient = Promise.promisifyAll(require('mongodb')).MongoClient;
const url = 'mongodb://localhost:27017/wye';

exports.getAllResponses = (res, req, entity) => {
  return MongoClient.connectAsync(url)
    .then(function (db) {
      return db.collection(entity).find().toArray();
    })
    .then(function (data) {
      return res.status(200).json(data);
    });
}
