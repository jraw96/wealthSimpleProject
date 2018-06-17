/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FundComponent } from './fund/fund.component'
import { SignupComponent } from './signup/signup.component'

import { RewardsComponent } from './rewards/rewards.component'
import { ProfileComponent } from './profile/profile.component'
import { WelcomeComponent } from './welcome/welcome.component';


export const ROUTES: Routes = [
   // {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '', component: WelcomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'fund', component: FundComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'rewards', component: RewardsComponent},


];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
