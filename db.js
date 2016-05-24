const Promise = require('bluebird');
const MongoClient = Promise.promisifyAll(require('mongodb')).MongoClient;
const config = require('./config');
const url = config.databaseUrl;

exports.getAllResponses = (res, req, entity) => {
  return MongoClient.connectAsync(url)
    .then(function (db) {
      return db.collection(entity).find().toArray();
    })
    .then(function (data) {
      return res.status(200).json(data);
    });
}
