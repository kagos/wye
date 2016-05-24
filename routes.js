const db = require("./db.js");

exports.setRoute = (entity, router) => {
  return router.route('/' + entity).get(function(req, res) {
    return db.getAllResponses(res, req, entity);
  });
}
