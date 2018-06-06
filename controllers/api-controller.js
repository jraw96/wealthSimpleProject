// controllers/api-controller.js
//
// Backend Controller Functions
const request = require('request')
var ctr = {}

ctr.evenDeeper = function(req, res){
    var response = {}
    response.yolo = "yoyoyoyoyoy"
    res.send(response)
}


// Bundle and export this file for the app.js file
module.exports = ctr