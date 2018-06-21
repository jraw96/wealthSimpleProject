import { Component, OnInit } from '@angular/core';
import { RouterObserverService } from "../services/router-observer.service"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private ro: RouterObserverService) { }

  ngOnInit(){
    // send message to subscribers via observable subject
    this.ro.sendData('Message from Child One Component!');
  }

  sendData(){
    this.ro.sendData('Message from button Click on Child One');
  }

  ngOnDestroy(){
      // clear message
      this.ro.clearData();
  }

  clearData(){
    // clear message
      this.ro.clearData();
  }

}
