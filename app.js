// Create the express.js app
const express = require('express') // Bring in express
const app = express() // Create an express app instance, called: app 

// Node modules used in our app
const bodyParser = require('body-parser')
const request = require('request')
const path = require('path') // Used to set the location of the front end files

// Imported files within the root directory
const clientAPI = require('./routes/api.js')
const privateData = require('./private/private.js')

// Configure the app to parse the url-encoded values and json post requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require('express-session')({ secret: 'wealthsimple is cool', resave: true, saveUninitialized: true }));

// Enable CORS to allow access for Wealth Simple
app.use('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
})


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// =============
// Passport.js OpenID Connect Authentication Strategy
// =============

var passport = require('passport');
var Strategy = require('passport-openidconnect').Strategy;

// Define the OpenID Connect Strategy
passport.use(new Strategy({
  clientID: privateData.ID,
  clientSecret: privateData.secret,
  authorizationURL: privateData.authorizationURL,
  tokenURL: privateData.tokenURL,
  callbackURL: privateData.callbackURL,
  scope: privateData.scope
}));


// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session. 
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Initialize passport to track sessions
app.use(passport.initialize());
app.use(passport.session());


// Passport/authetnication end points. 
app.get('/login', passport.authenticate('openidconnect'));
app.get('/callback', passport.authenticate('openidconnect', { failureRedirect: '/login' }),function(req, res) {

    // Redirect to the home page upon authentication. Eventually this will redirect to wherever the user in the front end was. 
    res.redirect('/');
});

// =============
// End of Passport.js authenticetion
// ============


// All other routing is done here. 
app.use('/api', clientAPI)

// Set the path to serve the static frontend files
app.use(express.static(path.join(__dirname, 'public/dist')));


// Used to connect the dist routes with the express routes. 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});


// Turn on the app -----------
const port = process.env.PORT || 3000
app.listen(port)
console.log("Running on port: " + port)
