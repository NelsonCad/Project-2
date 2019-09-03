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
}

