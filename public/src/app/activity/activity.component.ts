import { Component, OnInit } from '@angular/core';
import { AccountService } from "../services/account.service"

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  response: any = JSON.parse(`{"accounts":{"object":"account","offset":0,"total_count":7,"results":[{"object":"account","id":"tfsa-pasi0y3y","type":"ca_tfsa","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"ws-jackpot"}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-06-19T22:12:29Z","updated_at":"2018-06-19T22:12:29Z"},{"object":"account","id":"rrsp-ckcdscew","type":"ca_rrsp","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"ArrrrARRsp"}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-06-19T21:58:10Z","updated_at":"2018-06-19T21:58:10Z"},{"object":"account","id":"rrsp-xg-khkux","type":"ca_rrsp","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"Doge Account xD"}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-06-11T03:54:26Z","updated_at":"2018-06-11T03:54:26Z"},{"object":"account","id":"resp-wlx5r9wc","type":"resp_family","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":null}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-31T23:31:02Z","updated_at":"2018-05-31T23:31:02Z"},{"object":"account","id":"rrsp-i4umimwo","type":"ca_rrsp","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"wealthcomplex"}],"net_liquidation":{"amount":"3029.21","currency":"CAD"},"gross_position":{"amount":"25897.43","currency":"CAD"},"total_deposits":{"amount":"10000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:31Z","updated_at":"2018-05-29T19:04:31Z"},{"object":"account","id":"tfsa-vdguqh-x","type":"ca_tfsa","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"First Account"}],"net_liquidation":{"amount":"17765.31","currency":"CAD"},"gross_position":{"amount":"67300.45","currency":"CAD"},"total_deposits":{"amount":"10000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:31Z","updated_at":"2018-05-29T19:04:31Z"},{"object":"account","id":"ca-hisa-jyqx0xjd","type":"ca_hisa","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"So Smart"}],"net_liquidation":{"amount":"8400.35","currency":"CAD"},"gross_position":{"amount":"8072.51","currency":"CAD"},"total_deposits":{"amount":"1000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:30Z","updated_at":"2018-05-29T19:04:30Z"}]},"mongoHistory":{"_id":"5b296dc3ba639713fa741dab","depositHistory":[{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"100","accountInfoBeforeDeposit":{"type":"ca_rrsp","id":"rrsp-i4umimwo","nickname":"","amount":"2961.38","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"121","accountInfoBeforeDeposit":{"type":"ca_tfsa","id":"tfsa-vdguqh-x","nickname":"","amount":"17259.89","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"12","accountInfoBeforeDeposit":{"type":"ca_rrsp","id":"rrsp-i4umimwo","nickname":"","amount":"2961.38","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"1211","accountInfoBeforeDeposit":{"type":"ca_rrsp","id":"rrsp-i4umimwo","nickname":"","amount":"2961.38","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"13","accountInfoBeforeDeposit":{"type":"ca_rrsp","id":"rrsp-i4umimwo","nickname":"","amount":"2961.38","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"44","accountInfoBeforeDeposit":{"type":"ca_rrsp","id":"rrsp-i4umimwo","nickname":"","amount":"2961.38","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"22","accountInfoBeforeDeposit":{"type":"ca_rrsp","id":"rrsp-i4umimwo","nickname":"","amount":"2961.38","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"56","accountInfoBeforeDeposit":{"type":"ca_rrsp","id":"rrsp-i4umimwo","nickname":"","amount":"2961.38","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"13","accountInfoBeforeDeposit":{"type":"ca_tfsa","id":"tfsa-vdguqh-x","nickname":"","amount":"17259.89","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"34","accountInfoBeforeDeposit":{"type":"ca_tfsa","id":"tfsa-vdguqh-x","nickname":"","amount":"17259.89","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"32","accountInfoBeforeDeposit":{"type":"ca_tfsa","id":"tfsa-vdguqh-x","nickname":"","amount":"17259.89","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"67","accountInfoBeforeDeposit":{"type":"ca_rrsp","id":"rrsp-i4umimwo","nickname":"","amount":"2961.38","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"33","accountInfoBeforeDeposit":{"type":"ca_tfsa","id":"tfsa-vdguqh-x","nickname":"","amount":"17259.89","currency":"CAD"}},{"depositDate":{"finalMM":"06","finalDay":"6/19/2018","dateString":"6/19/2018"},"amountDeposited":"43","accountInfoBeforeDeposit":{"type":"ca_rrsp","id":"rrsp-i4umimwo","nickname":"","amount":"2961.38","currency":"CAD"}}],"client_id":"person-ephr7kgw-qwxww"}}`)
  amountList: any[] = []

  toggle: Boolean = false

  selectAccounts: any[] = []

  mongoAccounts: any[] = [] // Saved when the component loads
  selectMongoAccounts: any[] = [] // Used by the UI

  ngOnInit() {



    this.accountService.getAllAccounts().subscribe(data =>{
      console.log("The data: " + JSON.stringify(data))
      var accounts = data["accounts"]["results"] //this.response["results"]
      this.amountList = []
   
      // Create an array to select accounts
      for(var i = 0; i<= accounts.length - 1; i++){
        var obj = {}
        obj["type"] = accounts[i]["type"]
        obj["id"] = accounts[i]["id"]
  
        // Assuming there is one owners object
        if(accounts[i]["owners"][0]["account_nickname"]){
          obj["nickname"] = accounts[i]["owners"][0]["account_nickname"]
        }else{
          obj["nickname"] = ""
        }
  
        obj["amount"] = accounts[i]["net_liquidation"]["amount"]
        obj["currency"] = accounts[i]["net_liquidation"]["currency"]
  
        // Keep track of selected accounts by keeping a corresponding boolean variable that gets toggled
        obj["active"] = false

        //Keep track of which depisit history (mongo) to show
        obj["mongo"] = false


       
    

        this.amountList.push(obj)
      
        console.log("Test: " + this.selectAccounts[i]["active"])
      }

      

  }, error =>{
    var accounts = this.response["accounts"]["results"] //this.response["results"]
    this.mongoAccounts = this.response["mongoHistory"]["depositHistory"]
    
    this.amountList = []
 
    // Create an array to select accounts
    for(var i = 0; i<= accounts.length - 1; i++){
      var obj = {}
      obj["type"] = accounts[i]["type"]
      obj["id"] = accounts[i]["id"]

      // Assuming there is one owners object
      if(accounts[i]["owners"][0]["account_nickname"]){
        obj["nickname"] = accounts[i]["owners"][0]["account_nickname"]
      }else{
        obj["nickname"] = ""
      }

      obj["amount"] = accounts[i]["net_liquidation"]["amount"]
      obj["currency"] = accounts[i]["net_liquidation"]["currency"]

      
      this.amountList.push(obj)
    
    }

    console.log("Error getting accounts: " + JSON.stringify(error))
  })


  }

  loadAccount(index){
    //console.log("Setting account: " + index)
    //console.log("Here is the account list: " + JSON.stringify(this.mongoAccounts))
   //console.log("Test: " + JSON.stringify(this.amountList[index]["id"]))

    this.amountList[index]["active"] = !(this.amountList[index]["active"])
    
    // Update the column of mongo mongo histories
    // Insert the mongo history into the 
    if(!this.amountList[index]["mongo"]){
      
      var history = this.mongoAccounts
      console.log("The history: "+ JSON.stringify(history))

      var mongoTemp = []

      for(var i = 0; i <= history.length -1; i++){
        var mongoObj = {}
        var currentId = this.amountList[index]["id"]
        mongoObj["account_history"] = []
        
        console.log("Active id: " + currentId)

        // Check to see if there is a previous deposit from this account
        var already = false
        var spot = 0
        if(mongoTemp.length > 0){
          
          for(var k = 0; k <= mongoTemp.length - 1; k++){
            if(currentId === mongoTemp[k]["account_Id"]){
             
              already = true
              spot = k
              break
            }
          }     
        }

        // If account no previous deposits, create the array to contain them
        
        if(!already){
          if(currentId === history[i]["accountInfoBeforeDeposit"]["id"]){
          //console.log("no previous deposits!")
          mongoObj["account_Id"] = currentId
          mongoObj["account_history"] = []

          // Create the object that will have its properties ready by the UI
          var obj = {}
          obj["date"] = history[i]["depositDate"]["dateString"] // Save the date
          obj["amount"] = history[i]["amountDeposited"] // Save the amount
          obj["balanceBefore"] = history[i]["accountInfoBeforeDeposit"]["amount"]
          obj["balanceAfter"] = Number(history[i]["accountInfoBeforeDeposit"]["amount"]) - Number(history[i]["amountDeposited"])

          // Add the deposit history object, to the list of deposits belonging to an account
          mongoObj["account_history"].push(obj)
          

          // Add this account deposit history to the list of all accounts
          mongoTemp.push(mongoObj)

          }
          //console.log("Sanity check!!")
        // If there are previous deposits, add to them
        }else{
 
          var obj = {}
          obj["date"] = history[i]["depositDate"]["dateString"] // Save the date
          obj["amount"] = history[i]["amountDeposited"] // Save the amount
          obj["balanceBefore"] = history[i]["accountInfoBeforeDeposit"]["amount"]
          obj["balanceAfter"] = Number(history[i]["accountInfoBeforeDeposit"]["amount"]) - Number(history[i]["amountDeposited"])


          // Using the spot, push the new deposit object into its deposit object history array
          mongoTemp[spot]["account_history"].push(obj)


        }

      }

      console.log("The value of mongotemp: " + JSON.stringify(mongoTemp))

      // UPdate the list of mongo accounts shown in the UI:
      this.selectMongoAccounts = mongoTemp


      // UPdate the account to now be true
      this.amountList[index]["mongo"] = true


    // Remove from the deposit history
    }else{
      this.selectMongoAccounts = this.selectMongoAccounts.slice(index, 1)
      this.amountList[index]["mongo"] = false
    }

  }

  toggleAll(){
    console.log("Toggling!")

    // IF false, load all accounts
    if(!this.toggle){

      for(var i = 0; i<= this.amountList.length - 1; i++){
        this.amountList[i]["active"] = true
      }

      this.toggle = true
    // If true, unload all accounts
    }else{
      for(var i = 0; i<= this.amountList.length - 1; i++){
        this.amountList[i]["active"] = false
      }
      this.toggle = false
    }

  }
}