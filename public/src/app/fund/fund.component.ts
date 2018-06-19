import { Component, OnInit } from '@angular/core';
import { AccountService } from "../services/account.service"

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {

    // Get all accounts associated with the logged in user:
    this.accountService.getAllAccounts().subscribe(data =>{
      console.log("Holy shit i got this: " + JSON.stringify(data))
      
    }, error=>{
      console.log('Yo dawg, got an error: ' + JSON.stringify(error))

    })


  }

}
