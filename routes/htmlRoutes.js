var db = require("../models");

module.exports = function (app) {

  // loads splash page
  app.get("/", function (req, res) {
    res.render("index");
  });

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

  // actual login request
  app.get("/login", passport.authenticate("auth0", {
    clientID: appInfo.clientID,
    domain: appInfo.domain,
    redirectUri: appInfo.callbackURL,
    responseType: "code",
    audience: "https://" + appInfo.domain + "/userinfo",
    scope: "openid profile"
  }), function (req, res) {
    res.redirect("/home");
  });

  // the logout request
  app.get("/logout", function (req, res) {
    req.logout();
    req.redirect("/home");
  });

  // callback request (related to authentication)
  app.get("/callback", passport.authenticate("auth0", {
    failureRedirect: "/failure"
  }), function (req, res) {
    res.redirect("/home");
  });

  // sends to users profile information page
  app.get("/user", function (req, res, next) {
    res.render("/profile", {
      user: req.user
    });
  });

  // if a failure happens for signing in, render the failure page
  app.get("/failure", function (req,res,next) {
    res.render("/failure");
  });

  // loads the art submission page
  app.get("/submit", function (req, res) {
    res.render("submit");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
