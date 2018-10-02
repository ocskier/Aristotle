var db = require("../models");
// var _ = require("lodash");

module.exports = function(app) {
  app.post("/api/userPlan/:userId/:title", function(req, res) {
    db.Plan.findOne({
      where: {
        title: req.params.title
      }
    }).then(function(dbExample) {
      db.UserPlan.create({
        UserId: req.params.userId,
        PlanId: dbExample.id
      }).then(function(dbExample) {
        res.json(dbExample);
      });
    });
  });

  // Create a new lesson plan
  app.post("/api/lesson", function(req, res) {
    console.log(req.body);
    db.Plan.create({
      title: req.body.title,
      description: req.body.description,
      subject: req.body.subject,
      grade: req.body.grade
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.put("/api/users/:id", function(req, res) {
    console.log(req.body);
    db.User.update(
      {
        subject: req.body.subject,
        grade: req.body.grade
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function() {
      req.logout();
      res.json("/login");
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
