const db = require("../models");
db.sequelize.sync({ force: true }).then(function () {
   db.Artist.create({
       artistName: "Joe",
       country: "USA",
       age: 30
   }).then(function (dbArtist) {
       db.Piece.create({
           ArtistId: dbArtist.id,
           artTitle: "The greatest title in the world",
           artDescription: "Some cool art I made",
           artLink: "fake url goes here"
       });
       db.Piece.create({
           ArtistId: dbArtist.id,
           artTitle: "The greatest title in the world",
           artDescription: "Some cool art I made",
           artLink: "fake url goes here"
       });
       db.Piece.create({
           ArtistId: dbArtist.id,
           artTitle: "The greatest title in the world",
           artDescription: "Some cool art I made",
           artLink: "fake url goes here"
       });
       db.Piece.create({
           ArtistId: dbArtist.id,
           artTitle: "The greatest title in the world",
           artDescription: "Some cool art I made",
           artLink: "fake url goes here"
       });
   });
});