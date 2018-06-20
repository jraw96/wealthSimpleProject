// TODO: SHow a loading symbol instead of buttons when loading the page



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

    loading: boolean = false
    loggedIn: boolean = false

    // Check to see if the browser session has a valid, authenticated session in the server
    ngOnInit(){
        this.accessToken.getSessionInfo().subscribe(data => {
           // For successful authentication, enable the authenticated views:
           this.loggedIn = true

        }, error =>{
            // If there is a 4.x error, it means the current session is not authenticated. 
            // Set the webpage to display the non-authentiected view
            this.loggedIn = false // UNDO
        })
        
    }

    authenticate(){
         // Uncomment this:
         this.accessToken.authenticate().subscribe(data =>{
            console.log("I got this back: " + JSON.stringify(data))

            // Go to the Wealth Simple auth portal
            if(data["authorizeURL"]){
                this.loading = true
                window.location.href = data["authorizeURL"]
            }else{
                console.log("All logged in!")
                this.loading = false
                this.loggedIn = true
            }

        }, error =>{
            if(error["error"]["authorizeURL"]){
                this.loading = true      
                window.location.href = error["error"]["authorizeURL"]
            }

        })
        
    }
  
        
}
