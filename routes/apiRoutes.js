var db = require("../models");

<<<<<<< HEAD
module.exports = function (app) {
=======
const AWS = require("aws-sdk");
const multer = require("multer");
>>>>>>> 67c117613bd748e4ba0b8e6fc1ec8691a974078c

// Multer File Middleware
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

<<<<<<< HEAD
  // Get all art pieces
  app.get("/api/art", function (req, res) {
    db.Piece.findAll({}).then(function (pieces) {
      res.json(pieces);
    });
  });

  // Submit a piece of art
  app.post("/api/art", function (req, res) {
    db.Piece.create(req.body).then(function (pieces) {
      res.json(pieces);
=======
module.exports = function (app) {
  // Get all examples
  app.get("/api/artists", function (req, res) {
    db.Artist.findAll({}).then(function (dbArtist) {
      res.json(dbArtist);
    });
  });

  // Create a artist/login
  app.post("/api/post", function (req, res) {
    db.Artist.create(req.body).then(function () {
      res.status(200).end();
>>>>>>> 67c117613bd748e4ba0b8e6fc1ec8691a974078c
    });
  });
  // Create a new artist piece
  app.post("/api/newPiece", upload.single("file"), function (req, res) {
    db.Piece.create(
      
    )
  });
}

<<<<<<< HEAD
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
=======
>>>>>>> 67c117613bd748e4ba0b8e6fc1ec8691a974078c
