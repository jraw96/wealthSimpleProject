
// Create the express.js app
const express = require('express') // Bring in express

// =============
// Passport.js OpenID Connect Authentication Strategy
// =============

var passport = require('passport');
var Strategy = require('passport-openidconnect').Strategy;

// Define the OpenID Connect Strategy
passport.use(new Strategy({
  clientID: '2bd47d4bcac42fd817c8b3a6da6d792042402a34d034e790ebb73da6315bf833',
  clientSecret: 'f1a1da160f46b333f927531b5b6a5fcb36de4fc9119809a483c71998af290789',
  authorizationURL: 'https://staging.wealthsimple.com/oauth/authorize',
  tokenURL: 'https://api.sandbox.wealthsimple.com/v1/oauth/token',
  callbackURL: 'http://localhost:3000/callback',
  scope: 'read'
},
function(token, tokenSecret, profile, cb) {
  // In this example, the user's Twitter profile is supplied as the user
  // record.  In a production-quality application, the Twitter profile should
  // be associated with a user record in the application's database, which
  // allows for account linking and authentication with other identity
  // providers.
  return cb(null, profile);
}));


// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session. 
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});




const app = express() // Create an express app instance, called: app 

// Node modules used in our app
const bodyParser = require('body-parser')
const request = require('request')
const path = require('path') // Used to set the location of the front end files

// Imported files within the root directory
const clientAPI = require('./routes/api.js')
const authenticationAPI = require('./routes/authentication.js')
const privateData = require('./private/private.js')

// Declare the port to run the app on
const port = 3000

// Enable CORS to allow access for Wealth Simple
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Configure the app to parse the url-encoded values and json post requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require('express-session')({ secret: 'wealthsimple is cool', resave: true, saveUninitialized: true }));




// =============
// Passport initializing and routing
// =============


// Turn on passport
app.use(passport.initialize());
app.use(passport.session());

app.get('/login',
  passport.authenticate('openidconnect'));

app.get('/callback', 
  passport.authenticate('openidconnect', { failureRedirect: '/login' }),
  function(req, res) {

  
  console.log("YOKO ONO?????")
    console.log("test: " + JSON.stringify(req.user))


    res.redirect('/');
  });

  /*
app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });
  */

// ============
// ============


// Set where the endpoints are for the frontend API. They are defined there. 
app.use('/api', clientAPI)

// Set the endpoint for authentication via OpenID Connect
//app.use('/callback', authenticationAPI)

// Set the path to serve the static frontend files
app.use(express.static(path.join(__dirname, 'public/dist')));

// Open the static index file first
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});

// Turn on the app -----------
app.listen(port)
console.log("Running on port: " + port)
