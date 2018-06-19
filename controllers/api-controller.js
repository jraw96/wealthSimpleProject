// controllers/api-controller.js
//
// Backend Controller Functions
const request = require('request')
var ctr = {}

ctr.login = function(req, res){

    // TODO: Get this to load from the generated url service, not hard coded
    var authorizeURL = "https://staging.wealthsimple.com/oauth/authorize?response_type=code&client_id=2bd47d4bcac42fd817c8b3a6da6d792042402a34d034e790ebb73da6315bf833&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=read"
    var resObj = {}
    resObj.authorizeURL = authorizeURL
    res.status(200) // Set an unauthorized status code
    res.send(resObj)
}

ctr.attachInfo = function(req, res){
    var response = {}
    response.userInfo = {
        user : req.user.params["resource_owner_id"],
        person : req.user.params["client_canonical_id"]
    }

    console.log('Going to send this: ' + response)
    res.status(200)
    res.send(response)
}

ctr.getAllAccounts = function(req, res){
    var response = {}
    response = req.userInfo
    console.log('oh shit whattup: ' + JSON.stringify(req.userInfo))


    var options = { method: 'GET',
    url: 'https://api.sandbox.wealthsimple.com/v1/accounts',
    qs: { client_id: 'person-ephr7kgw-qwxww' },
    headers:   { 
        Authorization: 'Bearer ' +  req.userInfo["access_token"]
        },
    json: true 
    };

    request(options, function (error, response, body) {
    if (error) {
        res.status(200)
        res.send("Error")
    }else{
        console.log("Got these accounts back! " + JSON.stringify(body));
        res.status(200)
        res.send(body)
    }


});



    
}


// Bundle and export this file for the app.js file
module.exports = ctr