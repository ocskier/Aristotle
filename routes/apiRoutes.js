var db = require("../models");
var _ = require("lodash")

module.exports = function(app) {
  // Get all Lesson Plans from a given subject

  app.get("/api/subject/:subject/grade/:grade", function(req, res) {
    var queryVar = _.capitalize(req.params.subject);

    db[queryVar]
      .findAll({
        where: {
          grade: req.params.grade
        }
      })
      .then(function(dbExample) {
        res.json(dbExample);
      });
  });

  // Create a new example
  app.post("/api/subject/:subject", function(req, res) {
    var queryVar = _.capitalize(req.params.subject);
    db[queryVar].create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
