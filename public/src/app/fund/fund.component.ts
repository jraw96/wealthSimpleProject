import { Component, OnInit } from '@angular/core';
import { AccountService } from "../services/account.service"


// TODO: make confirmation message after a successful deposit
// TODO: Subtract amounts avaible in each account in the drop down


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
  enableDesosit2: Boolean = false
  enteredAmount: String = ""
  selectedFromAccount: String = ""

  statusMessage: String = ""

  jackpotList: any[] = []

  ngOnInit() {

    // Get all accounts associated with the logged in user:
    
    this.accountService.getAllAccounts().subscribe(data =>{
      console.log("Holy shit i got this: " + JSON.stringify(data))

      var accounts = data["accounts"]["results"]
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
  
        // Do not put in the ws-jackpot account
        console.log("Checking this account: " + obj["nickname"])
        if(obj["nickname"] != " - ws-jackpot"){
          console.log("Skipped the jackpot account")
          this.amountList.push(obj)
        }
        
      
      }
  
      console.log("Here is the amoutlist: " + JSON.stringify(this.amountList))
  
  
      // Insert the current jackpot amount
      this.jackpotList = []
  
      // There is only one jackpot amount, and its hard coded
      var temp = {}
      temp["amount"] = 1500000
      temp["account"] = "Jackpot"
  
      this.jackpotList.push(temp)
    
  
    this.getMaxAmount()

      
    }, error=>{
      console.log('Yo dawg, got an error: ' + JSON.stringify(error))

    })

  }

  getMaxAmount(){
    var max = this.amountList[this.accountIndex]
    this.currentMax = max["amount"]

    console.log("Here is the selected account: " + JSON.stringify(this.amountList[this.accountIndex]))
    console.log("Proposing this max amount: " + max["amount"])

    console.log("COmparing: " + this.enteredAmount + " and " + this.currentMax)
    if(Number(this.enteredAmount) < this.currentMax && this.enteredAmount != ""){
      this.enableDeposit = true
    }else{
      this.enableDeposit = false
    }
    
  }

  setAccount(thing){
    this.statusMessage = ""
    console.log('Got this index: ' + thing)
    if(thing != "Select Account"){
    this.accountIndex = thing 

   // this.selectedFromAccount = this.amountList[this.accountIndex]["nickname"]
   console.log("I want to set this nickname: " + this.amountList[this.accountIndex])
    console.log("Set the account from here: " + JSON.stringify(this.amountList[thing]))
    var name = this.amountList[thing]["nickname"]
    this.selectedFromAccount = name


    this.check4Account()

    this.getMaxAmount()


    }
  }

  enterAmount(){
    console.log("Can I enter this amount: " + this.enteredAmount)

    var num = Number(this.enteredAmount)
    console.log("This is num: " + num)

    if(isNaN(num) || num == 0){
      console.log("Not a number!!!!!")
      this.enableDeposit = false
    }else{
      if(num < this.currentMax){
        console.log("Yep, enable because: " + num + " < " + this.currentMax)
        this.enableDeposit = true
      }else{
        console.log("Nope, enable because: " + num + " > " + this.currentMax)
        this.enableDeposit = false
      }
     
    }

    console.log("Value of deposit2: " + this.enableDesosit2)
    
  }

  // Submit the deposit to the backend for processing
  submitDeposit(){
    this.enableDeposit = false
    

    
    var obj = {}
    obj["info"] = this.amountList[this.accountIndex]
    obj["amount"] = this.enteredAmount
    obj['date'] = this.getDate()

    this.enteredAmount = ""
    console.log("I will send this objet: " + JSON.stringify(obj))

    this.accountService.postJackpotDeposit(obj).subscribe(data =>{
      console.log("Got this back after a successful post: " + data)

      // SHow status message
      this.statusMessage = "Successfully Deposited!"
      
    }, error => {
      console.log("Error sending deposit info: " + JSON.stringify(error))
      this.statusMessage = "Unable to deposit at this time. "
    })
    
  }

  check4Account(){
    if(this.selectedFromAccount != ""){
      this.enableDesosit2 = true
    }else{
      this.enableDesosit2 = false
    }
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