import { Component, OnInit } from '@angular/core';
import { AccountService } from "../services/account.service"
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  constructor(private accountService: AccountService) { }


  response: any = JSON.parse(`{"object":"account","offset":0,"total_count":5,"results":[{"object":"account","id":"rrsp-xg-khkux","type":"ca_rrsp","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"Doge Account xD"}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-06-11T03:54:26Z","updated_at":"2018-06-11T03:54:26Z"},{"object":"account","id":"resp-wlx5r9wc","type":"resp_family","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":null}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-31T23:31:02Z","updated_at":"2018-05-31T23:31:02Z"},{"object":"account","id":"rrsp-i4umimwo","type":"ca_rrsp","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":null}],"net_liquidation":{"amount":"2961.38","currency":"CAD"},"gross_position":{"amount":"25718.14","currency":"CAD"},"total_deposits":{"amount":"10000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:31Z","updated_at":"2018-05-29T19:04:31Z"},{"object":"account","id":"tfsa-vdguqh-x","type":"ca_tfsa","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":null}],"net_liquidation":{"amount":"17259.89","currency":"CAD"},"gross_position":{"amount":"66532.53","currency":"CAD"},"total_deposits":{"amount":"10000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:31Z","updated_at":"2018-05-29T19:04:31Z"},{"object":"account","id":"ca-hisa-jyqx0xjd","type":"ca_hisa","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":null}],"net_liquidation":{"amount":"8349.88","currency":"CAD"},"gross_position":{"amount":"8028.7","currency":"CAD"},"total_deposits":{"amount":"1000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:30Z","updated_at":"2018-05-29T19:04:30Z"}]}`)
  amountList: any[] = []

  accountIndex: number = 0
  currentMax: number = 0
  enableDeposit: Boolean = false
  enteredAmount: String = ""

  jackpotList: any[] = []

  ngOnInit() {

    // Get all accounts associated with the logged in user:
    /*
    this.accountService.getAllAccounts().subscribe(data =>{
      console.log("Holy shit i got this: " + JSON.stringify(data))
      
    }, error=>{
      console.log('Yo dawg, got an error: ' + JSON.stringify(error))

    })


*/
    var accounts = this.response["results"]
    this.amountList = []
 
    // Create an array to select accounts
    for(var i = 0; i<= accounts.length - 1; i++){
      var obj = {}
      obj["type"] = accounts[i]["type"]
      obj["id"] = accounts[i]["id"]

      // Assuming there is one owners object
      if(accounts[i]["owners"][0]["account_nickname"]){
        obj["nickname"] = " - " + accounts[i]["owners"][0]["account_nickname"]
      }else{
        obj["nickname"] = ""
      }

      obj["amount"] = accounts[i]["net_liquidation"]["amount"]
      obj["currency"] = accounts[i]["net_liquidation"]["currency"]

      
      this.amountList.push(obj)
    
    }

    console.log("Here is the amoutlist: " + JSON.stringify(this.amountList))


    // Insert the current jackpot amount
    this.jackpotList = []

    // There is only one jackpot amount, and its hard coded
    var temp = {}
    temp["amount"] = 14355
    temp["account"] = "Jackpot"

    this.jackpotList.push(temp)
  

  this.getMaxAmount()

  }

  getMaxAmount(){
    var max = this.amountList[this.accountIndex]
    this.currentMax = max["amount"]

    console.log("Proposing this max amount: " + max["amount"])
    
  }

  setAccount(thing){
    this.accountIndex = thing
    this.getMaxAmount()
  }

  enterAmount(){
    console.log("Can I enter this amount: " + this.enteredAmount)

    var num = Number(this.enteredAmount)
    console.log("This is num: " + num)

    if(isNaN(num) || num == 0){
      console.log("Not a number")
      this.enableDeposit = false
    }else{
      if(num < this.currentMax){
        this.enableDeposit = true
      }else{
        this.enableDeposit = false
      }
     
    }
  }

  // Submit the deposit to the backend for processing
  submitDeposit(){
    var obj = {}
    obj["info"] = this.amountList[this.accountIndex]
    obj["amount"] = this.enteredAmount
    obj['date'] = this.getDate()

    console.log("I will send this objet: " + JSON.stringify(obj))
    
  }

  getDate(){
     // Get the current date
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  var finalDD
  if(dd<10) {
    finalDD = '0'+dd
  } 

  var finalMM
  if(mm<10) {
    finalMM = '0'+mm
  } 

  var finalDay

  finalDay = mm + '/' + dd + '/' + yyyy;
  //console.log("The date: " + finalDay)

  var dateObj = {}
  dateObj["finalDD"] = finalDD
  dateObj["finalMM"] = finalMM
  dateObj["finalDay"] = finalDay
  dateObj["dateString"] = finalDay

  return dateObj
  }

}


//margin-left: -110px;
//min-width: 7.5rem;