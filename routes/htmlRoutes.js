var db = require("../models");

<<<<<<< HEAD
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
    db.Piece.findAll({}).then(function(dbExamples) {
      res.render("artists", {
        examples: dbExamples
      });
    });
  });
  app.get("/art", function(req, res) {
    db.Piece.findAll({}).then(function(dbExamples) {
      res.render("art", {
        examples: dbExamples
      });
    });
  });
  app.get("/submit", function(req, res) {
    db.Piece.findAll({}).then(function(dbExamples) {
      res.render("submit", {
        msg: "Complete the form below to register!",
        examples: dbExamples
      });
    });
=======
module.exports = function (app) {

  // loads splash page
  app.get("/", function (req, res) {
    res.send("index");
  })

  // Load arts page
  app.get("/art", function (req, res) {
    db.Piece.findAll()
      .then(function (piece) {
        res.render("artPage", {
          piece: piece
        });
      }).catch(err => { throw err });
>>>>>>> 153e26146741ed7cd4649dc251ade737d2045d13
  });

  // Load example page and pass in an example by id
  app.get("/artists", function (req, res) {
    db.Artist.findAll()
      .then(function (artist) {
        res.render("artistPage", {
          artist: artist
        });
      }).catch(err => { throw err });
  });

  // loads the Login page
  app.get("/login", function (req, res) {
    res.render("artistlogin");
  });

  // loads the art submission page
  app.get("/submit", function (req,res) {
    res.render("artsubmit");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
