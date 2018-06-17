import { Component, OnInit } from '@angular/core';
import { AccessTokenService } from "../services/access-token.service"

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private accessToken: AccessTokenService) { }

  ngOnInit() {
  }


  authenticate(){
    this.accessToken.authenticate().subscribe(data =>{
      console.log("I got this back: " + JSON.stringify(data))

      // Go to the Wealth Simple auth portal
      if(data["authorizeURL"]){
          window.location.href = data["authorizeURL"]
      }else{
          console.log("All logged in!")
       
      }

  }, error =>{
      console.log("Yo dawg, error: " + JSON.stringify(error))
  })
  }



}
