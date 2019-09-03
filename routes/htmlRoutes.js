var db = require("../models");

module.exports = function (app) {

  // loads splash page
  app.get("/", function (req, res) {
    res.render("index");
  })

  // Load arts page
  app.get("/art", function (req, res) {
    db.Piece.findAll()
      .then(function (piece) {
        res.render("artPage", {
          piece: piece
        });
      }).catch(err => { throw err });
  });

  app.get("/home", function (req, res) {
    res.render("home");
  });

  // Load example page and pass in an example by id
  app.get("/artists", function (req, res) {
    db.Artist.findAll()
      .then(function (artist) {
        res.render("artists", {
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
    res.render("submit");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
