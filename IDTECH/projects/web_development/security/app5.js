// Implementing sessions and cookies with passport. Level 5 security

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
// Install and require session, passport and passportlocalmongoose
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// We set up the session with some initial configuration
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
  }));

  // we tell our app to use passport and to initialize the passport package
  app.use(passport.initialize());
  // we also tell our app to use passport in dealing with the session.
  app.use(passport.session());

mongoose.connect('mongodb://127.0.0.1:27017/userDB');
// mongoose.set("useCreateIndex", true);

// set up userSchema to use passport mongoose
const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

// let our app use passport local mongoose as a plugin
userSchema.plugin(passportLocalMongoose);
// find or create added as a plugin as directed by documentation
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

//we use our passpor local mongoose to create a local in strategy
passport.use(User.createStrategy());

// set it to serialise and deserialise our user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//OAuth
// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/secrets",
//    userProfileURL: "http://www.googleapis.com/oauth2/v3/userinfo"
//   },
passport.use(new GoogleStrategy({
    clientID: process.env["CLIENT_ID"],
    clientSecret: process.env["CLIENT_SECRET"],
    callbackURL: "http://localhost:3000/auth/google/secrets",
    scope: [ 'profile' ],
    state: true
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


app.get("/", function(req, res){
    res.render("home");
});

// route to initiate authentication with google
app.get("/auth/google", function(req, res){
    // when we hit up google we tell them what we want is the user profile
    passport.authenticate('google', { scope: ["profile"] });
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/register", function(req, res){
    res.render("register");
});

app.get("/secrets", function(req, res){
    if (req.isAuthenticated()){
        res.render("secrets");
    } else {
        res.redirect("/login");
    }
});

app.get("/logout", function(req, res){
    req.logout(function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

app.post("/register", function(req, res){
    User.register({username: req.body.username}, req.body.password, function(err, user){
        if (err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        }
    })
});

app.post("/login", function(req, res){

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err){
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        }
    });
});


app.listen(3000, function(){
    console.log("Server started and running on port 3000...")
})