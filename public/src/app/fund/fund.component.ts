import { Component, OnInit } from '@angular/core';
import { AccountService } from "../services/account.service"

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  constructor(private accountService: AccountService) { }


  accounts: any = JSON.parse(`{"object":"account","offset":0,"total_count":5,"results":[{"object":"account","id":"rrsp-xg-khkux","type":"ca_rrsp","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":"Doge Account xD"}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-06-11T03:54:26Z","updated_at":"2018-06-11T03:54:26Z"},{"object":"account","id":"resp-wlx5r9wc","type":"resp_family","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":null}],"net_liquidation":{"amount":"0.0","currency":"CAD"},"gross_position":{"amount":"0.0","currency":"CAD"},"total_deposits":{"amount":"0.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-31T23:31:02Z","updated_at":"2018-05-31T23:31:02Z"},{"object":"account","id":"rrsp-i4umimwo","type":"ca_rrsp","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":null}],"net_liquidation":{"amount":"2961.38","currency":"CAD"},"gross_position":{"amount":"25718.14","currency":"CAD"},"total_deposits":{"amount":"10000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:31Z","updated_at":"2018-05-29T19:04:31Z"},{"object":"account","id":"tfsa-vdguqh-x","type":"ca_tfsa","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":null}],"net_liquidation":{"amount":"17259.89","currency":"CAD"},"gross_position":{"amount":"66532.53","currency":"CAD"},"total_deposits":{"amount":"10000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:31Z","updated_at":"2018-05-29T19:04:31Z"},{"object":"account","id":"ca-hisa-jyqx0xjd","type":"ca_hisa","nickname":null,"base_currency":"CAD","external_id":null,"status":"open","owners":[{"client_id":"person-ephr7kgw-qwxww","ownership_type":"primary","account_nickname":null}],"net_liquidation":{"amount":"8349.88","currency":"CAD"},"gross_position":{"amount":"8028.7","currency":"CAD"},"total_deposits":{"amount":"1000.0","currency":"CAD"},"total_withdrawals":{"amount":"0.0","currency":"CAD"},"created_at":"2018-05-29T19:04:30Z","updated_at":"2018-05-29T19:04:30Z"}]}`)

  ngOnInit() {

    // Get all accounts associated with the logged in user:
    this.accountService.getAllAccounts().subscribe(data =>{
      console.log("Holy shit i got this: " + JSON.stringify(data))
      
    }, error=>{
      console.log('Yo dawg, got an error: ' + JSON.stringify(error))

    })


  }

}


//margin-left: -110px;
//min-width: 7.5rem;