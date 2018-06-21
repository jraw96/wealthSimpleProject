import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {

  constructor() { }

  

  showDepositReward: Boolean = true
  showReferralReward: Boolean = true

  showReturn: Boolean= false

  ngOnInit() {
  }

  hideReward(type){
    if(type === "deposit"){
      this.showDepositReward = false
    }

    if(type === "refer"){
      this.showReferralReward = false
    }

    if(!this.showDepositReward && !this.showReferralReward){
      this.showReturn = true
    }else{
      this.showReturn = false
    }

  }

  showRewards(){
    this.showDepositReward = true
    this.showReferralReward = true

    this.showReturn = false
  }

}
