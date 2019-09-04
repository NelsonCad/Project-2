const AWS = require("aws-sdk");
const multer = require("multer");
var db = require("../models");
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
  app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;

    const s3bucket = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION
    });

    //Where you want to store your file
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read"
    };

    // res.json(req.body);

    s3bucket.upload(params, function (err, data) {
      if (err) {
        res.status(500).json({ error: true, Message: err });
      } else {
        db.Artist.create({
          artistName: "Joe",
          country: "USA",
          age: 30
        }).then(function (dbArtist) {
          return db.Piece.create({
            ArtistId: dbArtist.id,
            artTitle: req.body.name,
            artDescription: req.body.description,
            artLink: data.Location
          })
        }).then(dbPiece => res.json(dbPiece));
      }
    });
  });
}