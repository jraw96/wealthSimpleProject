var express = require('express'); // bring in express
var router = express.Router(); // brings in the express router
const ctr = require('../controllers/api-controller.js')

// This endpoint displays a message in the console 
router.get('/evenDeeper', ctr.evenDeeper)

// Expose the api 
module.exports = router