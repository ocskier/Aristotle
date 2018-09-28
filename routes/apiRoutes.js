var db = require("../models");
// var _ = require("lodash");

module.exports = function(app) {
  // Get all Lesson Plans from a given subject
  app.get("/api/lesson", function(req, res) {
    db.Plan.findAll({}).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Get all Lesson Plans saved by a User
  app.get("/api/:id/:planId", function(req, res) {
    db.UserPlan.findAll({
      where: {
        UserId: req.params.UserId,
        PlanId: req.params.PlanId
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/userPlan", function(req, res) {
    db.UserPlan.create({
      UserId: req.user.id,
      PlanId: req.body.PlanId
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new lesson plan
  app.post("/api/lesson", function(req, res) {
    db.Plan.create({
      author: req.body.author,
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

  app.delete("/api/lesson/:id", function(req, res) {
    db.Plan.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  //for testing
  module.exports = function(app) {
    // Get all examples
    app.get("/api/examples", function(req, res) {
      db.Example.findAll({}).then(function(dbExamples) {
        res.json(dbExamples);
      });
    });
  };

};
