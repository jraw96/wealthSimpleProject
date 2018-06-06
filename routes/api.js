var express = require('express'); // bring in express
var router = express.Router(); // brings in the express router
const ctr = require('../controllers/api-controller.js')


// This function needs to be included in every API request, to make sure the user is always authenticated. 
function checkAuthentication(req,res,next){

    // If the access token is legit, stay in session, keep calm and carry on. 
    if(req.isAuthenticated()){
        next();

    // If not, get a new auth code and request a new access token. 
    } else{
        // Set the URL to set the page manually to
        // res.redirect("/login");
        var authorizeURL = "https://staging.wealthsimple.com/oauth/authorize?response_type=code&client_id=2bd47d4bcac42fd817c8b3a6da6d792042402a34d034e790ebb73da6315bf833&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=read"
        var resObj = {}
        resObj.authorizeURL = authorizeURL
        res.send(resObj)
    }
}

// This endpoint displays a message in the console 
router.get('/evenDeeper', checkAuthentication, ctr.evenDeeper)


// Expose the api 
module.exports = router