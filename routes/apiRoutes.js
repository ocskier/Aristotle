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

  // create a new user at signup
  app.post("/api/signup", function(req, res) {
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        subject: req.body.subject,
        grade: req.body.grade,
        region: req.body.region
    }).then(function(response) {
        res.json(response)
    })
  })

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    var queryVar = _.capitalize(req.params.subject);
    db[queryVar].destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
