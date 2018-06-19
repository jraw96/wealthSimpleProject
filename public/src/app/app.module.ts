import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";

// Components
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { FundComponent } from './fund/fund.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ActivityComponent } from './activity/activity.component'

// Services
import { AccessTokenService } from "./services/access-token.service";
import { AccountService } from "./services/account.service";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        FundComponent,
        RewardsComponent,
        ProfileComponent,
        SignupComponent,
        WelcomeComponent,
        ActivityComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        ClarityModule,
        ROUTING
    ],
    providers: [AccessTokenService, 
                AccountService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
