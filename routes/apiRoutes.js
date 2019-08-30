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

  // Submit a piece of art
  app.post("/api/art", function (req, res) {
    db.Piece.create(req.body).then(function (pieces) {
      res.json(pieces);
    });
  });

  // Update a post
  app.put("api/art/:id", function (req,res) {

  });

  // Delete a post
  app.delete("api/art/:id")

  //=========================================================

  // get all artists
  app.get("/api/artists", function (req, res) {

  });

  // Creating a login for the artist
  app.post("/api/artists", function (req, res) {

  });

  // Update an artists information
  app.put("api/artists/:id", function (req, res) {

  });

  // Delete an artists
  app.delete("/api/artists/:id", function (req, res) {

  });

};
