
// Import node modules -------------------------------

const express = require('express') // Bring in express
const app = express() // Create an express app instance, called: app 

// The big node modules we are going to be using for our app
const bodyParser = require('body-parser')
const request = require('request')
const path = require('path') // Used to set the location of the front end files

// Configure the app to parse the url-encoded values in post requests
app.use(bodyParser.urlencoded({ extended: false }))
 
// Configure the app to parse bodies in POST request that are in pure json
app.use(bodyParser.json())

// There are many configuartions that can be set for body-parser

// Set the path to serve the static frontend files
app.use(express.static(path.join(__dirname, 'public/dist')));

// Declare the port to run the app on
const port = 3000

// Declare endpoints (also known as routes) ---------------------------------

// Open the static index file first
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});

/*
// Default route. Visiting the localhost:3000 hit this end point
app.get('/', (req, res) => {
  res.send('Yo yo whattup dawg')
})
*/

// This endpoint displays a message in the console 
app.get('/evenDeeper', (req, res) => {
    console.log("Even deeper has been hit")
    var body = req.body
    response.send(body)
  })


  // This endpoint is hit by WealthSimple, after clicking "allow access"
  // The full endpoint: localhost:3000/callback was set when our oauth client was created. 
  // and needs to be known by wealthsimple ahead of time. 

  // To trigger the OpenID connect sequence, send the following get request in an internet browser:
  // https://staging.wealthsimple.com/oauth/authorize?client_id=2bd47d4bcac42fd817c8b3a6da6d792042402a34d034e790ebb73da6315bf833&redirect_uri=http://localhost:3000/callback&response_type=code&scope=read

  app.get('/callback', (req, res) =>{

    // Build a json object with all the details we need to get an access token, now that we have an authorization code. 
    // The authorization code is recieved once permission is confirmed in the browser (authorizing), 
    // then our node server needs to authenticate by sending a backend HTTP request with the client secret.
    // If our secret matches the secret kept in the records of Wealthsimple, they will send back an access token with a 
    // bunch more information
    
    // Oauth client details with authorization code extracted from the req object. 
    var options = { 
      client_id: '2bd47d4bcac42fd817c8b3a6da6d792042402a34d034e790ebb73da6315bf833',
      client_secret: 'f1a1da160f46b333f927531b5b6a5fcb36de4fc9119809a483c71998af290789',
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/callback',
      code: req.query.code 
      } 

    // This is the POST object, that the node module 'request' uses to send an HTTP request. 
    var body = { 
      method: 'POST',
      url: 'https://api.sandbox.wealthsimple.com/v1/oauth/token',
      body: options, // Include the options object we created
      json: true
    }

    // Send the 'body' object in the request function. 
    request(body, function (error, response, body) {

      // If an error was received back from Wealth Simple, display it
      if (error){
        console.log("Got this error: " + JSON.stringify(error))
        body = "Error"
      // If not, send the body back to the browser
      }else{
        console.log("Success!")
      }
      res.send(body)
    });

  })


// Turn on the app -----------

app.listen(port)
console.log("Running on port: " + port)
