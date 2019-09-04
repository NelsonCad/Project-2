var db = require("../models");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Piece.findAll({}).then(function(dbExamples) {
      res.render("index", {
        examples: dbExamples
      });
    });
  });
//   app.get("/home", function(req, res) {
//     db.Piece.findAll({}).then(function(dbExamples) {
//       res.render("home", {
//         examples: dbExamples
//       });
//     });
//   });
//   app.get("/artists", function(req, res) {
//     db.Piece.findAll({}).then(function(dbExamples) {
//       res.render("artists", {
//         examples: dbExamples
//       });
//     });
//   });
//   app.get("/art", function(req, res) {
//     db.Piece.findAll({}).then(function(dbExamples) {
//       res.render("art", {
//         examples: dbExamples
//       });
//     });
//   });
//   app.get("/submit", function(req, res) {
//     db.Piece.findAll({}).then(function(dbExamples) {
//       res.render("submit", {
//         msg: "Complete the form below to register!",
//         examples: dbExamples
//       });
//     });
//   });
//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });
//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
 };
