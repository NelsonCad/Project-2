require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");
const { join } = require("path");
const session = ("session");
const passport = ("passport");
const Auth0Strategy = ("passport-auth0");

var app = express();
var PORT = process.env.PORT || 3000;

// Authentication strategy as passports needs them [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
const appInfo = {
  domain: process.env.DOMAIN,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: PORT
}

const strategy = new Auth0Strategy(
  appInfo,
  function (accessToken, refreshToken, extraParam, profile, done) {
    return done(null, profile);
  }
);

passport.use(strategy);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserailizeUser(function (user, done) {
  done(null, user);
});

// Middleware [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // body-parser
app.use(express.static("public"));

app.use(
  session({
    secret: "your_secret_key",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.loggedIn = false;

  if (req.session.passport && typeof req.session.passport.user !== "undefined") {
    res.locals.loggedIn = true;
  }

  next();
});

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

app.get("/callback", passport.authenticate("auth0", {
  failureRedirect: "/failure"
}), function (req, res) {
  res.redirect("/user");
});

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
