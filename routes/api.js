var express = require('express'); // bring in express
var router = express.Router(); // brings in the express router
const ctr = require('../controllers/api-controller.js')

function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else{
        res.redirect("/login");
    }
}

// This endpoint displays a message in the console 
router.get('/evenDeeper', checkAuthentication, ctr.evenDeeper)

// Expose the api 
module.exports = router