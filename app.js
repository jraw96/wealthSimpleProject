
// Create the express.js app
const express = require('express') // Bring in express
const app = express() // Create an express app instance, called: app 

// Node modules used in our app
const bodyParser = require('body-parser')
const request = require('request')
const path = require('path') // Used to set the location of the front end files

// Imported files within the root directory
const clientAPI = require('./routes/api.js')

// Declare the port to run the app on
const port = 3000

// Configure the app to parse the url-encoded values and json post requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Enable CORS to allow access for Wealth Simple
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Set where the endpoints are for the API. They are defined there. 
app.use('/api', clientAPI)

// Set the path to serve the static frontend files
app.use(express.static(path.join(__dirname, 'public/dist')));

// Open the static index file first
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});

// Turn on the app -----------
app.listen(port)
console.log("Running on port: " + port)
