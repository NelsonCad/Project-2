var db = require("../models");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Piece.findAll({}).then(function(dbExamples) {
      res.render("index", {
        examples: dbExamples
      });
    });
  });
  app.get("/home", function(req, res) {
    db.Piece.findAll({}).then(function(dbExamples) {
      res.render("home", {
        examples: dbExamples
      });
    });
  });
  app.get("/artists", function(req, res) {
    db.Artist.findAll({}).then(function(dbExamples) {
      res.render("artists", {
        examples: dbExamples
      });
    });
  });
  // loads the art submission page
  app.get("/art", function(req, res) {
    db.Piece.findAll({}).then(function(dbExamples) {
      res.render("art", {
        examples: dbExamples
      });
    });
  });
  // loads the art submission page
  app.get("/submitart", function(req, res) {
    db.Piece.findAll({}).then(function(dbExamples) {
      res.render("submitart", {
        msg: "Complete the form below to register!",
        examples: dbExamples
      });
    });
  });
  // Load example page and pass in an example by id
  app.get("/artistsignup", function(req, res) {
    db.Piece.findAll({}).then(function(dbExamples) {
      res.render("artistsignup", {
        examples: dbExamples
      });
    });
  });

  // loads the art submission page
  app.get("/submit", function (req, res) {
    res.render("submit");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
