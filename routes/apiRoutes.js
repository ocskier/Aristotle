var db = require("../models");

module.exports = function(app) {
  // Get all Lesson Plans from a given subject
  app.get("/api/subject/:subject/grade/:grade", function(req, res) {
    db.SocialStudies.findAll({
      where: {
        subject: req.params.subject,
        grade: req.params.grade
      }
    }).then(function(dbSocialStudies) {
      res.json(dbSocialStudies);
    });
  });

  // Get all Math Lesson Plans
  app.get("/api/math", function(req, res) {
    db.Math.findAll({}).then(function(dbMath) {
      res.json(dbMath);
    });
  });

  // Get all Science Lesson Plans
  app.get("/api/science", function(req, res) {
    db.Science.findAll({}).then(function(dbScience) {
      res.json(dbScience);
    });
  });

  // Get all English Lesson Plans
  app.get("/api/english", function(req, res) {
    db.English.findAll({}).then(function(dbEnglish) {
      res.json(dbEnglish);
    });
  });

  // Get a lesson plan by grade level
  app.get("/api/science/:subject", function(req, res) {
    db.Example.findAll({ where: { subject: req.params.subject } }).then(
      function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
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
