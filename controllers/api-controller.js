// controllers/api-controller.js
//
// Backend Controller Functions
const request = require('request')
const mongojs = require('mongojs')
const privateData = require('../private/private.js')

// Create a mongoDB connection
var db = mongojs('mongodb://' + privateData.mongoUser + ':' + privateData.mongoPassword + '@ds263520.mlab.com:63520/wealthsimplejackpot')


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
        //console.log("Got these accounts back! " + JSON.stringify(body));
        res.status(200)
        res.send(body)
    }


});



    
}

ctr.postJackpotDeposit = function(req, res){
console.log("Yo, got this from the frontend: " + JSON.stringify(req.body))


// Create a deposit decoment
var deposit = {}
deposit.depositHistory = []
deposit["client_id"] = req.userInfo["person"]
depObj = {}

depObj["depositDate"] = req.body.date
depObj["amountDeposited"] = req.body.amount
depObj["accountInfoBeforeDeposit"] = req.body.info
deposit.depositHistory.push(depObj)

//console.log("Saving this:  " + JSON.stringify(deposit))


// Get the user's history to update it
db["deposit-history-users"].findOne({"client_id" : req.userInfo["person"]}, function(err,data1){
    if(err){
        console.log("Shitty, an error happened")
        res.status(400)
                var responseObj = {}
                responseObj.text = "Failure saving deposit information"
                res.send(responseObj)

    }else{
        console.log("History found, adding onto it! " + JSON.stringify(data1))

        // Create a record from scratch if there is no existing document
        if(data1 == null){
            console.log("Assuming the document has no history")
            

        db["deposit-history-users"].save(deposit, function(err, data2){
            if(err){
                console.log("Error unfortunetly: " + JSON.stringify(err))
          
                res.status(400)
                var responseObj = {}
                responseObj.text = "Failure saving deposit information"
                res.send(responseObj)
          
            }else{
              console.log("Successful save! ")
              var responseObj = {}
              responseObj.text = "success"
              res.status(200)
              res.send(responseObj)
          
            }
          
          });


        // Add to the document history array if it already exists    
        }else{

            console.log("Got this existing data! Let's update it " + JSON.stringify(data1))

            var updateDepositObj = {}
            var existingDataHistory = data1.depositHistory
            existingDataHistory.push(depObj)

            data1["depositHistory"] = existingDataHistory


            db["deposit-history-users"].save(data1, function(err, data2){
                if(err){
                    console.log("Error updating an existing document: " + JSON.stringify(err))
              
                    res.status(400)
                    var responseObj = {}
                    responseObj.text = "Failure saving deposit information"
                    res.send(responseObj)
              
                }else{
                  console.log("Successfully updated an existing object!")
                  var responseObj = {}
                  responseObj.text = "successful deposit history update"
                    res.status(200)
                  res.send(responseObj)
              
                }
              
              });
        }
    }
})









}


// Bundle and export this file for the app.js file
module.exports = ctr