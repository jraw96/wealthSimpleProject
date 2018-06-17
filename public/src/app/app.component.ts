import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessTokenService } from "./services/access-token.service"

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router, private accessToken: AccessTokenService) { }

    loading: boolean = false//true;

    // Check to see if the browser session has a valid, authenticated session in the server
    ngOnInit(){

        // Uncomment this:
        /*
         this.accessToken.authenticate().subscribe(data =>{
            console.log("I got this back: " + JSON.stringify(data))

            // Go to the Wealth Simple auth portal
            if(data["authorizeURL"]){
                window.location.href = data["authorizeURL"]
            }else{
                console.log("All logged in!")
                this.loading = false
            }

        }, error =>{
            console.log("Yo dawg, error: " + JSON.stringify(error))
        })
        */
        
    }
  
        
}
