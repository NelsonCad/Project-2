var db = require("../models");

const AWS = require("aws-sdk");
const multer = require("multer");

// Multer File Middleware
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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
    });
  });
  // Create a new artist piece
  app.post("/api/newPiece", upload.single("file"), function (req, res) {
    db.Piece.create(

    )
  });


  // Update a post
  app.put("api/art/:id", function (req, res) {

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
