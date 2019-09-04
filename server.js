require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");
const session = require("express-session");
const Auth0Strategy = require('passport-auth0');
const passport = require("passport");
// const { join } = require("path");

var app = express();
var PORT = process.env.PORT || 8000;
// Authentication strategy as passports needs them [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]



const strategy = new Auth0Strategy({
  domain: process.env.DOMAIN,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK
},
  function (accessToken, refreshToken, extraParam, profile, done) {
    return done(null, profile);
  }
);

passport.use(strategy);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.use(
  session({
    secret: "your_secret_key",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

let user;

app.use(function (req, res, next) {
  res.locals.loggedIn = false;

  if (req.session.passport && typeof req.session.passport.user !== "undefined") {
    res.locals.loggedIn = true;
  }

  next();
});

// actual login request
app.get("/login", passport.authenticate("auth0", {
  clientID: process.env.DOMAIN,
  domain: process.env.CLIENT_ID,
  redirectUri: process.env.CALLBACK,
  responseType: "code",
  audience: "https://dev-pryx8unr.auth0.com/userinfo",
  scope: "openid profile"
}), function (req, res) {

  res.redirect("home");
});

// the logout request
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("home");

  user = null;
});

// callback request (related to authentication)
app.get("/callback", passport.authenticate("auth0", {
  failureRedirect: "/failure"
}), function (req, res) {
  res.redirect("/user");
});

// sends to users profile information page
app.get("/user", function (req, res, next) {
  res.render("user", {
    user: req.user
  });

  user = req.user
});

// if a failure happens for signing in, render the failure page
app.get("/failure", function (req, res, next) {
  res.render("failure");
});

// Middleware [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]



require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port " + PORT + ". Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;