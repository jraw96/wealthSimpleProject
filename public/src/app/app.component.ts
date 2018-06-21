// TODO: SHow a loading symbol instead of buttons when loading the page

import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessTokenService } from "./services/access-token.service"
import { AccountService } from "./services/account.service"
import { RouterObserverService } from "./services/router-observer.service"

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router, 
                private accessToken: AccessTokenService, 
                private accountService: AccountService,
                private ro:RouterObserverService ) {

                    // Subscribe to the signup component service to disable nav bar features
                 //   this.subscription = this.ro.getData().subscribe(data => {                  
                 //       console.log("Eyyyyoooo!")
                 //       this.dataPassed = data; 
                //    }); 
                
                }



    loading: boolean = false
    loggedIn: boolean = false

    subscription: Subscription;
    dataPassed: any;

    signingUp: boolean = false

    // Sign up variables
    firstName: String = ""
    lastName: String = ""
    phoneNumber: String = ""
    emailAddress: String = ""

    submitObj: any = {"firstName": false, "lastName": false, "emailAddress":false, "phoneNumber: ": false, "conditions":false}
    enableSubmit: Boolean = false
    


    // Check to see if the browser session has a valid, authenticated session in the server
    ngOnInit(){
        this.accessToken.getSessionInfo().subscribe(data => {
           // For successful authentication, enable the authenticated views:
           console.log("Got these values from logon: " + JSON.stringify(data))

           this.accountService.setUser(data["userInfo"]["person"])


           this.loggedIn = true

        }, error =>{
            // If there is a 4.x error, it means the current session is not authenticated. 
            // Set the webpage to display the non-authentiected view
            this.loggedIn = false // UNDO
        })
        
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
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

    gotoSignup(){
        console.log("switching components!!")
        this.signingUp = !this.signingUp
        
        // REset the submitObj validator tracker
        this.submitObj = {"firstName": false, "lastName": false, "emailAddress":false, "phoneNumber: ": false}
      
    }

    // Form validator functions for signing up

    firstNameCheck(){

        if(this.firstName.length > 0){
            this.submitObj["firstName"] = true
        }else{
            this.submitObj["firstName"] = false
        }
        this.submitButtonCheck()
    }

    lastNameCheck(){
        if(this.lastName.length > 0){
            this.submitObj["lastName"] = true
        }else{
            this.submitObj["lastName"] = false
        }
        this.submitButtonCheck()
    }

    phoneNumberCheck(){
        if(this.phoneNumber.length >= 10){
            this.submitObj["phoneNumber"] = true
        }else{
            this.submitObj["phoneNumber"] = false
        }
        this.submitButtonCheck()
    }

    emailAddressCheck(){
       
        // check for the '@' symbol
        if(this.emailAddress.indexOf('@') > -1){
            this.submitObj["emailAddress"] = true
        }else{
            this.submitObj["emailAddress"] = true
        }
        this.submitButtonCheck()
    }

    submitButtonCheck(){
        if(this.submitObj["emailAddress"] && this.submitObj["phoneNumber"] && this.submitObj["lastName"] && this.submitObj["firstName"] && this.submitObj["conditionsCheck"]){
            this.enableSubmit = true
            console.log('yes!!')
        }else{
            this.enableSubmit = false
            console.log('no!!!!')
        }
    }

    conditionsCheck(){
        this.submitObj["conditionsCheck"] = !(this.submitObj["conditionsCheck"])
        this.submitButtonCheck()
    }


  
        
}
