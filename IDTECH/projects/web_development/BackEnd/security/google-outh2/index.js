/* EXPRESS */

const express = require('express');
const session = require("express-session");

const passport = require('passport');
var userProfile;

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '107638645493-84rehn38shj3f2fel4hjb0cs3c4aqs40.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const app = express();


app.set('view engine', 'ejs');

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
    userProfile=profile;
    return done(null, userProfile);
}
));



app.get('/', function(req, res) {
    res.render('pages/auth');
});

app.get('/success', (req, res) => res.send(userProfile));

app.get('/error', (req, res) => res.send("error loggin in"));

app.get('/auth/google',
passport.authenticate('google', { scope : ['profile', 'email'] }));


app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/error' }),
function(req, res) {
    // successful authentication, redirect success.
    res.redirect('/success');
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port ' + port));