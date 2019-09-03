var db = require("../models");

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
