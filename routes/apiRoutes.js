var db = require("../models");

<<<<<<< HEAD
module.exports = function(app) {
  // Get all examples
  app.get("/api/artists", function(req, res) {
    db.Artist.findAll({}).then(function(dbArtist) {
      res.json(dbArtist);
=======
module.exports = function (app) {


  // Get all art pieces
  app.get("/api/art", function (req, res) {
    db.Piece.findAll({}).then(function (pieces) {
      res.json(pieces);
>>>>>>> 153e26146741ed7cd4649dc251ade737d2045d13
    });
  });

  // Create a artist/login
  app.post("/api/art", function (req, res) {
    db.Piece.create(req.body).then(function (pieces) {
      res.json(pieces);
    });
  });

  //=========================================================

  // get all artists
  app.get("/api/artists", function (req, res) {

  })

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //    res.json(dbExample);
  //  });
  // });
};
