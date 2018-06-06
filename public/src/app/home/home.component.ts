/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit} from "@angular/core";

// Services 
import { AccessTokenService } from "../services/access-token.service"
import { access } from "fs";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    constructor(private accessToken: AccessTokenService){}

    ngOnInit() {
        console.log("We loaded to home")



      }
}
