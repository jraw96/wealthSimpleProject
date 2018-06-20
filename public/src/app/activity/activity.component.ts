import { Component, OnInit } from '@angular/core';
import { AccountService } from "../services/account.service"

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  response: any = JSON.parse(`{"object":"account","offset":0,"total_count":7,"results":[{"object":"account","id":"tfsa-pasi0y3y","type":"ca_tfsa","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"ws-jackpot"}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-06-19T22:12:29Z","updated_at":"2018-06-19T22:12:29Z"},{"object":"account","id":"rrsp-ckcdscew","type":"ca_rrsp","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"ArrrrARRsp"}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-06-19T21:58:10Z","updated_at":"2018-06-19T21:58:10Z"},{"object":"account","id":"rrsp-xg-khkux","type":"ca_rrsp","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"Doge Account xD"}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-06-11T03:54:26Z","updated_at":"2018-06-11T03:54:26Z"},{"object":"account","id":"resp-wlx5r9wc","type":"resp_family","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":null}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-31T23:31:02Z","updated_at":"2018-05-31T23:31:02Z"},{"object":"account","id":"rrsp-i4umimwo","type":"ca_rrsp","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"wealthcomplex"}],"net_liquidation":{"amount":"3029.21","currency":"CAD"},"gross_position":{"amount":"25897.43","currency":"CAD"},"total_deposits":{"amount":"10000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:31Z","updated_at":"2018-05-29T19:04:31Z"},{"object":"account","id":"tfsa-vdguqh-x","type":"ca_tfsa","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"First Account"}],"net_liquidation":{"amount":"17765.31","currency":"CAD"},"gross_position":{"amount":"67300.45","currency":"CAD"},"total_deposits":{"amount":"10000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:31Z","updated_at":"2018-05-29T19:04:31Z"},{"object":"account","id":"ca-hisa-jyqx0xjd","type":"ca_hisa","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"So Smart"}],"net_liquidation":{"amount":"8400.35","currency":"CAD"},"gross_position":{"amount":"8072.51","currency":"CAD"},"total_deposits":{"amount":"1000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:30Z","updated_at":"2018-05-29T19:04:30Z"}]}`)
  amountList: any[] = []

  toggle: Boolean = false

  selectAccounts: any[] = []

  ngOnInit() {



    this.accountService.getAllAccounts().subscribe(data =>{
      console.log("The data: " + JSON.stringify(data))
      var accounts = data["results"] //this.response["results"]
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
        var account = {}
        account["active"] = false

        obj["active"] = false
        //this.selectAccounts.push(account)

        this.amountList.push(obj)
      
        console.log("Test: " + this.selectAccounts[i]["active"])
      }

      

  }, error =>{
    var accounts = this.response["results"]
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
    console.log("Setting account: " + index)

    this.amountList[index]["active"] = !(this.amountList[index]["active"])
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