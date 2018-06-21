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
    var authorizeURL = "https://staging.wealthsimple.com/oauth/authorize?response_type=code&client_id=2bd47d4bcac42fd817c8b3a6da6d792042402a34d034e790ebb73da6315bf833&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=read%20write"
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
        res.send({"text":"Error"})
    }else{
        //console.log("Got these accounts back! " + JSON.stringify(body));
        //res.status(200)
         //res.send(body)
         
        var accountBody = body

        // Get the deposit record associated with the user
        db["deposit-history-users"].findOne({"client_id" : req.userInfo["person"]}, function(err,data1){
            if(err){
                res.status(400)
                res.send({"text":"Error talking to mongo"})
            }else{
                var resBody = {}
                resBody.accounts = accountBody
                resBody.mongoHistory = data1

                res.status(200)
                res.send(resBody)
            }

        })
       
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

              // Make a formal withdraw request
                updateJackpot(deposit.depositHistory, req.userInfo)
                
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
              
                  // Make a formal withdraw request
                  updateJackpot(existingDataHistory, req.userInfo)
                }
              
              });
        }
    }
})


function updateJackpot(updateObj, userInfo){
    //console.log("Going to update this: " + JSON.stringify(updateObj))

    var access_token = userInfo["access_token"]
    var client_id = userInfo["person"]

    // Get the most recent update made to an account
    var account_id = ""
    var withdraw_amount = 0
    var withdraw_currency = ""

    console.log("Trying to fix this: " + JSON.stringify(updateObj))

    for(var i = 0; i<= updateObj.length - 1; i++){
        account_id = updateObj[i]["accountInfoBeforeDeposit"]["id"]
        withdraw_amount = updateObj[i]["amountDeposited"]
        withdraw_currency = updateObj[i]["accountInfoBeforeDeposit"]["currency"]
    }
    



    var withdraw_Id = "12341234" // Use random number generator

    console.log("Sanity check access token: " + access_token)

    // Get the Bank Account ID from wealthsimple
    var options = { method: 'GET',
    url: 'https://api.sandbox.wealthsimple.com/v1/bank_accounts',
    headers: 
    { 
        Authorization: 'Bearer ' + access_token
    },
    json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log("This is the body with the bank account detail: " + JSON.stringify(body))
     
        // Assume there is only one result. 
        var bank_account_id = body.results[0]["id"]

        // Make a withdrawal for the specified account
        var options = { method: 'POST',
        url: 'https://api.sandbox.wealthsimple.com/v1/withdrawals',
        headers: 
        { 
            Authorization: 'Bearer ' + access_token,
            'Content-Type': 'application/json' },
        body: 
        { bank_account_id: bank_account_id,
            account_id: account_id,
            client_id: client_id,
            value: { amount: withdraw_amount, currency: withdraw_currency },
            external_id: withdraw_Id,
            withdrawal_type: 'full',
            withdrawal_reason: 'other',
            withdrawal_reason_details: 'Withdrawing then depositing, to simulate a transfer',
            payee: 
            { external_id: 'tfsa-pasi0y3yd', // Hard coded to the ws-simple jackpot account
                service: 'wealthsimple api',
                given_name: 'Jake',
                surname: 'Raw' } },
        json: true };

        console.log("THis is my final withdraw object:")
        console.log(JSON.stringify(options))

        request(options, function (error, response, body) {
        if (error) {
            console.log("Darn there was an error withdrawing")
        }else{
            console.log("Holy shit, sucessful deposit!")
            console.log(JSON.stringify(body))


            // Time to deposit the amount withdrawn from the paying account, in the ws-jackpot account
            var options = { method: 'POST',
            url: 'https://api.sandbox.wealthsimple.com/v1/deposits',
            headers: 
            { 
                Authorization: 'Bearer ' + access_token,
                'Content-Type': 'application/json' },
            body: 
            { client_id: 'person-ephr7kgw-qwxww', // Hard coded to the ws-jackpot account
                bank_account_id: 'bank_account-TnbUM80bYevFcIRqAremGx20k', // Hard coded to the ws-jackpot account
                account_id: 'tfsa-pasi0y3y', // Hard coded to the ws-simple jackpot account
                amount: withdraw_amount,
                currency: withdraw_currency },
            json: true };

            request(options, function (error, response, body) {
            if (error){
                console.log('There was an error depositing the money into the jackpot account ' + JSON.stringify(body))
            }else{
                console.log('Congratulations, the amount was deposited into the ws-jackpot account!' + JSON.stringify(body))
            }

            
            });

        }

        });

   
    });

    

    // Deposit the money into the 
    }

}

// Get the person information associated with the account
ctr.getPerson = function(req, res){

console.log("Getting person!")


    var options = { 
 method: 'GET',
  url: 'https://api.sandbox.wealthsimple.com/v1/people',
  qs: { 
      "client_id":  req.userInfo["person"]
},
  headers: 
   { 
     Authorization: 'Bearer ' +  req.userInfo["access_token"],
   
    },
    json: true 
};

    console.log("The options: " + JSON.stringify(options))

request(options, function (error, response, body) {
    if(error){
        console.log('Error getting account information: ' + JSON.stringify(error))
        res.send(error)
    }else{

        var personBody = {}
        personBody = body

        console.log("Finding this guy: " + req.userInfo["person"])

        // Get the mongo data records associated with the person:
        db["deposit-history-users"].findOne({"client_id" : req.userInfo["person"]}, function(err,data){
            if(err){
                res.status(400)
                console.log("Error!!!")
                res.send({"text":"Error talking to mongo"})
            }else{
    
                // console.log("Here is the mongo data records: " + JSON.stringify(data))
    
                 var records = data["depositHistory"]
                 var total = 0
                 for(var i = 0; i<=records.length - 1; i++){
                   //  console.log("the record: " + JSON.stringify(records[i]))
                    // console.log("HEre is the amount: " + records[i]["amount"])
                    total = total + Number(records[i]["amountDeposited"])
                  //  console.log("New total: " + total)
                 }
    
                 var baseBallots = 0.02 * total

                 baseBallots = Math.ceil(baseBallots)
    
                // console.log("The base ballots: " + baseBallots)
    
                var resBody = {}
                resBody.personBody = personBody
                resBody.totalInvestment = total
                resBody.baseBallots = baseBallots
             
    
                res.status(200)
                res.send(resBody)
            }
    
        })
    }
});

}

/*
ctr.getTotalJackpotInvestment = function(req, res){

    // Get the deposit record for the user:
    db["deposit-history-users"].findOne({"client_id" : req.userInfo["person"]}, function(err,data){
        if(err){
            res.status(400)
            res.send({"text":"Error talking to mongo"})
        }else{

             console.log("Here is the mongo data records: " + JSON.stringify(data))





            var resBody = {}
            resBody.accounts = accountBody
            resBody.mongoHistory = data1

            res.status(200)
            res.send(resBody)
        }

    })

}
*/

// Bundle and export this file for the app.js file
module.exports = ctr