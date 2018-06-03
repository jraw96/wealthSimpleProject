var express = require('express'); // bring in express
var router = express.Router(); // brings in the express router
const ctr = require('../controllers/controller.js')

// This endpoint displays a message in the console 
router.get('/evenDeeper', ctr.evenDeeper)


// This endpoint is hit by WealthSimple, after clicking "allow access"
// The full endpoint: localhost:3000/callback was set when our oauth client was created. 
// and needs to be known by wealthsimple ahead of time. 

// To trigger the OpenID connect sequence, send the following get request in an internet browser:
// https://staging.wealthsimple.com/oauth/authorize?client_id=2bd47d4bcac42fd817c8b3a6da6d792042402a34d034e790ebb73da6315bf833&redirect_uri=http://localhost:3000/callback&response_type=code&scope=read
router.get('/callback', ctr.callback)


// Expose the api 
module.exports = router