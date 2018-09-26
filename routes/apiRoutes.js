var db = require("../models");
var _ = require("lodash");

module.exports = function(app) {
  // Get all Lesson Plans from a given subject
  app.get("/api/plans/:subject?/:grade?", function(req, res) {
    db.Plan.findAll({
      where: {
        ageGroup: req.params.grade,
        subject: req.params.subject
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new lesson plan
  app.post("/api/plans/lessons", function(req, res) {
    db.Plan.create({
      title: req.body.title,
      description: req.body.description,
      subject: req.body.subject,
      ageGroup: req.body.ageGroup,
      url: req.body.url
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.delete("/api/plans/:id", function(req, res) {
    db.Plan.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
