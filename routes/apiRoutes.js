var db = require("../models");

module.exports = function(app) {
  // Get all Social Studies Lesson Plans
  app.get("/api/socialstudies", function(req, res) {
    db.SocialStudies.findAll({}).then(function(dbSocialStudies) {
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
    db.Science.findAll({}).then(function(dbSocialStudies) {
      res.json(dbSocialStudies);
    });
  });

  // Get all English Lesson Plans
  app.get("/api/english", function(req, res) {
    db.English.findAll({}).then(function(dbSocialStudies) {
      res.json(dbSocialStudies);
    });
  });

  // Get an example by id
  app.get("/api/examples/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExamples
    ) {
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
