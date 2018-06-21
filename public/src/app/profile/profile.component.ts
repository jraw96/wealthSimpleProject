import { Component, OnInit } from '@angular/core';
import { AccountService } from "../services/account.service"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  person: any = {}

  ngOnInit() {

    this.person = (this.accountService.getPersonInfo())//["results"][0]
    console.log("Value of this person: " + JSON.stringify(this.person))

  }




}
