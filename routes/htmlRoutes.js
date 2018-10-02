// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our models
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/lessons");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      req.session.save(function(err) {
        if (err) {
          // ... panic!
        }
        res.redirect("/lessons");
      });
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page

  // the "/lesson" is essentially the homepage
  app.get("/lessons", function(req, res) {
    // Get all Lesson Plans from a given subject and grade
    if (req.user) {
      db.Plan.findAll({
        where: {
          subject: req.user.subject,
          grade: req.user.grade
        }
      }).then(function(data) {
        console.log(data);
        var hdbrsObj = {
          lessons: data
        };
        res.render("lessons", hdbrsObj);
      });
    } else {
      res.sendFile(path.join(__dirname, "../public/login.html"));
    }
  });

  //example from starter files, will not need
  app.get("/example/:id", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/example.html"));
  });

  //Route for user to access their profile information
  app.get("/profile", function(req, res) { 
    if (req.user) {
      console.log(req);
      db.Plan.findAll({
        include: [
          {
            model: db.User,
            where: { id: req.user.id }
          }
        ]
      }).then(function(data) {
        var hdbrsObj = {
          savedLessons : data,
          user_name: req.user.name.split(" ").map((s) => s.charAt(0).toUpperCase()+s.substring(1)).join(" "),
          user_subject: req.user.subject,
          user_grade: req.user.grade
        }
        res.render("profile", hdbrsObj);
      });
    }
    else {
      res.sendFile(path.join(__dirname, "../public/login.html"));
    }
  });

  // //Routes to display all lesson plan params selected using one html file
  // app.get("/lessons/*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/lessons.html"));
  // });

  //   app.get("/members/plan/*", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/plan.html"));
  //   });
};
