webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\r\nLearn about stuff here\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This is the "Learn" tab
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AboutComponent = (function () {
    function AboutComponent() {
        this.open = false;
    }
    AboutComponent = __decorate([
        core_1.Component({
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")],
            template: __webpack_require__("../../../../../src/app/about/about.component.html")
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "../../../../../src/app/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  activity works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/activity/activity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity/activity.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ActivityComponent = (function () {
    function ActivityComponent() {
    }
    ActivityComponent.prototype.ngOnInit = function () {
    };
    ActivityComponent = __decorate([
        core_1.Component({
            selector: 'app-activity',
            template: __webpack_require__("../../../../../src/app/activity/activity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity/activity.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivityComponent);
    return ActivityComponent;
}());
exports.ActivityComponent = ActivityComponent;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\r\n\r\n\r\n  <clr-header>\r\n    <div class=\"branding\">\r\n      <a href=\"/\" class=\"nav-link\">\r\n       <!-- <span class=\"clr-icon clr-clarity-logo\"></span> -->\r\n        <span><img style=\"width: 100%; border-radius: 10%\" src=\"../images/logo.jpg\"/></span> \r\n      </a>\r\n    </div>\r\n\r\n\r\n      <!-- Authenticated nav bar -->\r\n      <div *ngIf=\"loggedIn\" class=\"header-nav\" [clr-nav-level]=\"1\">\r\n\r\n          <!-- Left floating tabs -->\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"active\" style=\"margin-left: -70px\"><span class=\"nav-text\">Savings</span></a>\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/activity']\" routerLinkActive=\"active\" ><span class=\"nav-text\">Activity</span></a>\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/fund']\" routerLinkActive=\"active\" ><span class=\"nav-text\">Funding</span></a>\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/learn']\" routerLinkActive=\"active\" ><span class=\"nav-text\">Learn</span></a>\r\n\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/profile']\" routerLinkActive=\"active\" ><span class=\"nav-text\">Profile</span></a>\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/rewards']\" routerLinkActive=\"active\"><span class=\"nav-text\">Earn Rewards</span></a>\r\n         <!--  <a class=\"nav-link\" style=\"margin-left: 1rem\" routerLinkActive=\"active\"><clr-icon shape=\"cog\"></clr-icon></a> -->\r\n      \r\n      </div>\r\n\r\n      <div *ngIf=\"!loggedIn\" class=\"header-nav\" [clr-nav-level]=\"1\">\r\n\r\n          <span class=\"nav-text\" style=\"margin: 18px 0px 0px -110px; font-size: 30px\">Jackpot!</span>\r\n\r\n      </div>\r\n\r\n\r\n  </clr-header>\r\n\r\n\r\n  <div class=\"content-container\">\r\n    <div class=\"content-area\">\r\n\r\n      <!-- If logged in, allow access to the app components -->\r\n      <div *ngIf=\"loggedIn\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n\r\n      <!-- If not logged in, show unauthorized welcome page -->\r\n      <div *ngIf=\"!loggedIn\">\r\n        <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-8\">\r\n       \r\n        <h2>\r\n          What if you could win a huge jackpot, <br>\r\n          without having to risk losing your money? <br>\r\n          Yes, for real.\r\n        </h2>\r\n        <p style=\"font-size: 20px\">\r\n          Jackpot is a lottery-linked savings account. Our accounts reward YOU for making,\r\n          maintaing, and growing deposits over time with cash and prizes. Play the lottery\r\n          free, and grow your savings while you do it. \r\n        </p><br>\r\n\r\n        <button class=\"btn btn-outline\" (click)=\"authenticate()\" >Login</button>\r\n        <!--\r\n        <div *ngIf=\"loading\" style=\"margin-left: auto; margin-right: auto\">\r\n            <img style=\"width: 50px\" src=\"../../images/authing.gif\"/>\r\n        </div>\r\n        -->\r\n\r\n        <button class=\"btn btn-primary\">Signup</button>\r\n\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <img style=\"width: 100%\" src=\"../../images/yello-logo.png\">\r\n\r\n          </div>\r\n\r\n      </div>    \r\n    </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n</clr-main-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clr-icon.clr-clarity-logo {\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%0D%3C!--%0D  ~ Copyright (c) 2016 VMware%2C Inc. All Rights Reserved.%0D  ~ This software is released under MIT license.%0D  ~ The full license information can be found in LICENSE in the root directory of this project.%0D  --%3E%0D%3Csvg width%3D%2236px%22 height%3D%2236px%22 viewBox%3D%220 0 36 36%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 40.3 (33839) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Elogo%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%3C%2Fdefs%3E%0D    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22logo%22 transform%3D%22translate(0.000000%2C 4.500000)%22%3E%0D            %3Cg id%3D%22large%22 transform%3D%22translate(0.000000%2C 0.044118)%22%3E%0D                %3Cpolyline id%3D%22Fill-3%22 fill%3D%22%230095D3%22 points%3D%2224.7018129 0.0388840336 35.979641 6.71768066 35.9614589 20.2811697 24.7018129 26.9417748 18.0173463 22.9707846 29.6688177 16.4295126 29.6688177 10.5321277 24.9216504 7.92742184 18.0321077 3.99030785%22%3E%3C%2Fpolyline%3E%0D                %3Cpolyline id%3D%22Fill-4%22 fill%3D%22%23F38B00%22 points%3D%2211.3313965 0.0388840336 0.0535685039 6.71768066 0.0717505512 20.2811697 11.3313965 26.9417748 18.0166889 22.970061 7.35448694 16.4295126 7.35448694 10.5321277 18.0324642 3.98991663%22%3E%3C%2Fpolyline%3E%0D                %3Cpolyline id%3D%22Fill-5%22 fill%3D%22%23004B70%22 points%3D%2218.017374 22.9708988 11.4990488 18.9719838 18.0212495 15.1272387 24.9510827 19.0786297%22%3E%3C%2Fpolyline%3E%0D                %3Cpolyline id%3D%22Fill-6%22 fill%3D%22%2398441E%22 points%3D%2218.0314053 3.98921729 11.5267517 7.97364692 18.0439938 11.8578324 24.9058951 7.91831944%22%3E%3C%2Fpolyline%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\n  height: 36px;\n  width: 36px;\n  margin-right: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: SHow a loading symbol instead of buttons when loading the page
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var access_token_service_1 = __webpack_require__("../../../../../src/app/services/access-token.service.ts");
var account_service_1 = __webpack_require__("../../../../../src/app/services/account.service.ts");
var AppComponent = (function () {
    function AppComponent(router, accessToken, accountService) {
        this.router = router;
        this.accessToken = accessToken;
        this.accountService = accountService;
        this.loading = false;
        this.loggedIn = false;
    }
    // Check to see if the browser session has a valid, authenticated session in the server
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessToken.getSessionInfo().subscribe(function (data) {
            // For successful authentication, enable the authenticated views:
            console.log("Got these values from logon: " + JSON.stringify(data));
            _this.accountService.setUser(data["userInfo"]["person"]);
            _this.loggedIn = true;
        }, function (error) {
            // If there is a 4.x error, it means the current session is not authenticated. 
            // Set the webpage to display the non-authentiected view
            _this.loggedIn = false; // UNDO
        });
    };
    AppComponent.prototype.authenticate = function () {
        var _this = this;
        // Uncomment this:
        this.accessToken.authenticate().subscribe(function (data) {
            console.log("I got this back: " + JSON.stringify(data));
            // Go to the Wealth Simple auth portal
            if (data["authorizeURL"]) {
                _this.loading = true;
                window.location.href = data["authorizeURL"];
            }
            else {
                console.log("All logged in!");
                _this.loading = false;
                _this.loggedIn = true;
            }
        }, function (error) {
            if (error["error"]["authorizeURL"]) {
                _this.loading = true;
                window.location.href = error["error"]["authorizeURL"];
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router, access_token_service_1.AccessTokenService, account_service_1.AccountService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var http_2 = __webpack_require__("../../../common/esm5/http.js");
var angular_1 = __webpack_require__("../../../../@clr/angular/esm5/clr-angular.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_routing_1 = __webpack_require__("../../../../../src/app/app.routing.ts");
// Components
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var fund_component_1 = __webpack_require__("../../../../../src/app/fund/fund.component.ts");
var rewards_component_1 = __webpack_require__("../../../../../src/app/rewards/rewards.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var signup_component_1 = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var welcome_component_1 = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
var activity_component_1 = __webpack_require__("../../../../../src/app/activity/activity.component.ts");
// Services
var access_token_service_1 = __webpack_require__("../../../../../src/app/services/access-token.service.ts");
var account_service_1 = __webpack_require__("../../../../../src/app/services/account.service.ts");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                home_component_1.HomeComponent,
                fund_component_1.FundComponent,
                rewards_component_1.RewardsComponent,
                profile_component_1.ProfileComponent,
                signup_component_1.SignupComponent,
                welcome_component_1.WelcomeComponent,
                activity_component_1.ActivityComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                angular_1.ClarityModule,
                app_routing_1.ROUTING
            ],
            providers: [access_token_service_1.AccessTokenService,
                account_service_1.AccountService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var fund_component_1 = __webpack_require__("../../../../../src/app/fund/fund.component.ts");
var signup_component_1 = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var rewards_component_1 = __webpack_require__("../../../../../src/app/rewards/rewards.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var activity_component_1 = __webpack_require__("../../../../../src/app/activity/activity.component.ts");
exports.ROUTES = [
    // {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'activity', component: activity_component_1.ActivityComponent },
    { path: 'learn', component: about_component_1.AboutComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'fund', component: fund_component_1.FundComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'rewards', component: rewards_component_1.RewardsComponent },
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);


/***/ }),

/***/ "../../../../../src/app/fund/fund.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>Add Savings</h3>\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-lg-5\">\r\n      <form class=\"deposit-form\">\r\n          <section class=\"form-block\">\r\n              <div class=\"form-group\">\r\n                  <label>From</label>\r\n\r\n                  <div class=\"select\" style=\"min-width: 6.5rem\">\r\n                      <select id=\"exampleSelect1\" (change)=\"setAccount($event.target.value)\">\r\n                           \r\n                            <option *ngFor=\"let account of amountList; let i = index\" [value]=\"i\">\r\n                              {{account[\"type\"]}}\r\n\r\n                              {{account[\"nickname\"]}}\r\n                              (${{account[\"amount\"]}} )\r\n                            </option>\r\n                                  \r\n                      </select>\r\n                  </div>\r\n              </div>\r\n          </section>\r\n\r\n          <section class=\"form-block\">\r\n              <div class=\"form-group\">\r\n                  <label>To</label>\r\n\r\n                  <div class=\"select\" style=\"min-width: 6.5rem\">\r\n                      <select id=\"exampleSelect1\">\r\n                        <option *ngFor=\"let pot of jackpotList\">\r\n                          {{pot[\"account\"]}} \r\n                          ($ {{pot[\"amount\"]}}) \r\n                        \r\n                        </option>\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n          </section>\r\n\r\n          <section class=\"form-block\">\r\n              <div class=\"form-group\">\r\n                  <label>Amount <!-- <br> <i>Max: {{currentMax}}</i> --> </label>\r\n            \r\n\r\n                  <input type=\"text\"  [(ngModel)]=\"enteredAmount\" name=\"first\" id=\"formFields_6\" placeholder=\"$\" (keyup)=\"enterAmount()\">\r\n\r\n\r\n              </div>\r\n          </section>\r\n\r\n          <section class=\"form-block\">\r\n              <div class=\"form-group\">\r\n                  <label>Schedule</label>\r\n\r\n                  <div class=\"select\" style=\"min-width: 6.5rem\">\r\n                      <select id=\"exampleSelect1\">\r\n                          <option>Just Once</option>\r\n                          <option>Monthly</option>\r\n                   \r\n                      </select>\r\n                  </div>\r\n              </div>\r\n          </section>\r\n\r\n          <!--\r\n          <section class=\"form-block\">\r\n              <div class=\"form-group\">\r\n                  <label>Deposit Date</label>\r\n\r\n                  <div class=\"select\" style=\"min-width: 6.5rem\">\r\n                      <select id=\"exampleSelect1\">\r\n                          <option>MB</option>\r\n                          <option>GB</option>\r\n                          <option>TB</option>\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n          </section>\r\n        -->\r\n\r\n      </form>\r\n\r\n      <div *ngIf=\"!enableDeposit\">\r\n          <button class=\"btn btn-primary\" disabled>Submit Deposit</button>\r\n      </div>\r\n      <div *ngIf=\"enableDeposit\">\r\n          <button class=\"btn btn-primary\" (click)=\"submitDeposit()\">Submit Deposit</button>\r\n      </div>\r\n      \r\n\r\n  </div>\r\n\r\n  <div class=\"col-lg-7\">\r\n\r\n \r\n    \r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/fund/fund.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".deposit-form {\n  background-color: #F2F2F2;\n  padding-left: 30px;\n  padding-bottom: 1px;\n  margin: 10px 0px 10px 10px;\n  border-radius: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fund/fund.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var account_service_1 = __webpack_require__("../../../../../src/app/services/account.service.ts");
// TODO: make confirmation message after a successful deposit
var FundComponent = (function () {
    function FundComponent(accountService) {
        this.accountService = accountService;
        this.response = JSON.parse("{\"object\":\"account\",\"offset\":0,\"total_count\":5,\"results\":[{\"object\":\"account\",\"id\":\"rrsp-xg-khkux\",\"type\":\"ca_rrsp\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":\"Doge Account xD\"}],\"net_liquidation\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-06-11T03:54:26Z\",\"updated_at\":\"2018-06-11T03:54:26Z\"},{\"object\":\"account\",\"id\":\"resp-wlx5r9wc\",\"type\":\"resp_family\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":null}],\"net_liquidation\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-31T23:31:02Z\",\"updated_at\":\"2018-05-31T23:31:02Z\"},{\"object\":\"account\",\"id\":\"rrsp-i4umimwo\",\"type\":\"ca_rrsp\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":null}],\"net_liquidation\":{\"amount\":\"2961.38\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"25718.14\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"10000.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-29T19:04:31Z\",\"updated_at\":\"2018-05-29T19:04:31Z\"},{\"object\":\"account\",\"id\":\"tfsa-vdguqh-x\",\"type\":\"ca_tfsa\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":null}],\"net_liquidation\":{\"amount\":\"17259.89\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"66532.53\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"10000.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-29T19:04:31Z\",\"updated_at\":\"2018-05-29T19:04:31Z\"},{\"object\":\"account\",\"id\":\"ca-hisa-jyqx0xjd\",\"type\":\"ca_hisa\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":null}],\"net_liquidation\":{\"amount\":\"8349.88\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"8028.7\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"1000.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-29T19:04:30Z\",\"updated_at\":\"2018-05-29T19:04:30Z\"}]}");
        this.amountList = [];
        this.accountIndex = 0;
        this.currentMax = 0;
        this.enableDeposit = false;
        this.enteredAmount = "";
        this.jackpotList = [];
    }
    FundComponent.prototype.ngOnInit = function () {
        // Get all accounts associated with the logged in user:
        var _this = this;
        this.accountService.getAllAccounts().subscribe(function (data) {
            console.log("Holy shit i got this: " + JSON.stringify(data));
            var accounts = _this.response["results"];
            _this.amountList = [];
            // Create an array to select accounts
            for (var i = 0; i <= accounts.length - 1; i++) {
                var obj = {};
                obj["type"] = accounts[i]["type"];
                obj["id"] = accounts[i]["id"];
                // Assuming there is one owners object
                if (accounts[i]["owners"][0]["account_nickname"]) {
                    obj["nickname"] = " - " + accounts[i]["owners"][0]["account_nickname"];
                }
                else {
                    obj["nickname"] = "";
                }
                obj["amount"] = accounts[i]["net_liquidation"]["amount"];
                obj["currency"] = accounts[i]["net_liquidation"]["currency"];
                _this.amountList.push(obj);
            }
            console.log("Here is the amoutlist: " + JSON.stringify(_this.amountList));
            // Insert the current jackpot amount
            _this.jackpotList = [];
            // There is only one jackpot amount, and its hard coded
            var temp = {};
            temp["amount"] = 14355;
            temp["account"] = "Jackpot";
            _this.jackpotList.push(temp);
            _this.getMaxAmount();
        }, function (error) {
            console.log('Yo dawg, got an error: ' + JSON.stringify(error));
        });
    };
    FundComponent.prototype.getMaxAmount = function () {
        var max = this.amountList[this.accountIndex];
        this.currentMax = max["amount"];
        console.log("Proposing this max amount: " + max["amount"]);
    };
    FundComponent.prototype.setAccount = function (thing) {
        this.accountIndex = thing;
        this.getMaxAmount();
    };
    FundComponent.prototype.enterAmount = function () {
        console.log("Can I enter this amount: " + this.enteredAmount);
        var num = Number(this.enteredAmount);
        console.log("This is num: " + num);
        if (isNaN(num) || num == 0) {
            console.log("Not a number");
            this.enableDeposit = false;
        }
        else {
            if (num < this.currentMax) {
                this.enableDeposit = true;
            }
            else {
                this.enableDeposit = false;
            }
        }
    };
    // Submit the deposit to the backend for processing
    FundComponent.prototype.submitDeposit = function () {
        this.enableDeposit = false;
        var obj = {};
        obj["info"] = this.amountList[this.accountIndex];
        obj["amount"] = this.enteredAmount;
        obj['date'] = this.getDate();
        this.enteredAmount = "";
        console.log("I will send this objet: " + JSON.stringify(obj));
        this.accountService.postJackpotDeposit(obj).subscribe(function (data) {
            console.log("Got this back after a successful post: " + data);
        }, function (error) {
            console.log("Error sending deposit info: " + JSON.stringify(error));
        });
    };
    FundComponent.prototype.getDate = function () {
        // Get the current date
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var finalDD;
        if (dd < 10) {
            finalDD = '0' + dd;
        }
        var finalMM;
        if (mm < 10) {
            finalMM = '0' + mm;
        }
        var finalDay;
        finalDay = mm + '/' + dd + '/' + yyyy;
        //console.log("The date: " + finalDay)
        var dateObj = {};
        dateObj["finalDD"] = finalDD;
        dateObj["finalMM"] = finalMM;
        dateObj["finalDay"] = finalDay;
        dateObj["dateString"] = finalDay;
        return dateObj;
    };
    FundComponent = __decorate([
        core_1.Component({
            selector: 'app-fund',
            template: __webpack_require__("../../../../../src/app/fund/fund.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fund/fund.component.scss")]
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService])
    ], FundComponent);
    return FundComponent;
}());
exports.FundComponent = FundComponent;
//margin-left: -110px;
//min-width: 7.5rem; 


/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\">\r\n    <div class=\"col-lg-5\">\r\n        <h1>Welcome, {{user}}</h1>\r\n        <h3>Your current investment with Jackpot:</h3>\r\n\r\n     <!--   <img width=\"50%\" style=\" display: block; margin: 10px auto 0px auto\" src=\"../../../images/orange-circle.png\"> -->\r\n\r\n        <div class=\"circle-container\" style=\"margin-top: 10px\">\r\n                <img src=\"../../../images/orange-circle.png\" style=\"width:50%;\">\r\n                <div class=\"centered\">{{totalInvestmentAmount}}</div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"col-lg-7\">\r\n        <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                       <h1 align=\"center\" >Jackpot by Wealthsimple</h1>\r\n                </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                       <img style=\"border-radius: 20%; margin-top: 20px; display: block; margin-left: auto; margin-right: auto \" src=\"../../../images/slots.jpg\">\r\n                     \r\n\r\n                </div>\r\n\r\n                <div class=\"col-lg-6\">\r\n                       <h3 style=\"padding-bottom: 14px\"><b>Next Draw: </b> {{nextDraw}}</h3>\r\n                       <h3 style=\"padding-bottom: 14px\"><b>Jackpot: </b> ${{jackpot}}</h3>\r\n                       <h3 style=\"padding-bottom: 14px\"><b>Odds*: </b> 1/3</h3>\r\n                       <h3 style=\"padding-bottom: 14px\"><b>Your Entries: </b> {{entries}}</h3>\r\n\r\n                       \r\n                 </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"padding-top: 12px\">\r\n                <button style=\"display: block; margin-left: auto; margin-right: auto\" class=\"btn btn-primary\">Fund Account</button>\r\n                <button style=\"display: block; margin-left: auto; margin-right: auto\" class=\"btn btn-primary\">Savings Insight</button>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"margin-top: 22px\">\r\n                <div class=\"col-lg-12\" style=\"background-color: #FFB565; padding: 0px 20px 20px 20px\">\r\n                    <p style=\"font-size: 16px; text-align: center\">\r\n                      <span style=\"color: white\">Want to turn your savings into income? </span> <a href=\"https://www.wealthsimple.com/en-ca/details\"> Learn more about Wealthsimple products\r\n                       here, and get your first $10,000 managed for free.</a>\r\n                    </p>\r\n                </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Container holding the image and the text */\n.circle-container {\n  position: relative;\n  text-align: center; }\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// Services 
var access_token_service_1 = __webpack_require__("../../../../../src/app/services/access-token.service.ts");
var HomeComponent = (function () {
    function HomeComponent(accessToken) {
        this.accessToken = accessToken;
        this.user = "jake";
        this.nextDraw = "Friday, June 22nd";
        this.entries = 33;
        this.jackpot = 1500000;
        this.totalInvestmentAmount = "$7502";
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log("We loaded to home");
    };
    HomeComponent = __decorate([
        core_1.Component({
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [access_token_service_1.AccessTokenService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/app.component.ts"));
__export(__webpack_require__("../../../../../src/app/app.module.ts"));


/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "../../../../../src/app/rewards/rewards.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  rewards works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/rewards/rewards.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rewards/rewards.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var RewardsComponent = (function () {
    function RewardsComponent() {
    }
    RewardsComponent.prototype.ngOnInit = function () {
    };
    RewardsComponent = __decorate([
        core_1.Component({
            selector: 'app-rewards',
            template: __webpack_require__("../../../../../src/app/rewards/rewards.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rewards/rewards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RewardsComponent);
    return RewardsComponent;
}());
exports.RewardsComponent = RewardsComponent;


/***/ }),

/***/ "../../../../../src/app/services/access-token.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var AccessTokenService = (function () {
    function AccessTokenService(http) {
        this.http = http;
    }
    // Request the access token using the backend API
    AccessTokenService.prototype.authenticate = function () {
        return this.http.get('http://localhost:3000/api/login');
    };
    AccessTokenService.prototype.getSessionInfo = function () {
        return this.http.get('http://localhost:3000/api/sessionInfo');
    };
    AccessTokenService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AccessTokenService);
    return AccessTokenService;
}());
exports.AccessTokenService = AccessTokenService;


/***/ }),

/***/ "../../../../../src/app/services/account.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        this.user = "loading...";
    }
    AccountService.prototype.getAllAccounts = function () {
        return this.http.get('http://localhost:3000/api/getAllAccounts');
    };
    AccountService.prototype.postJackpotDeposit = function (postObj) {
        return this.http.post('http://localhost:3000/api/postJackpotDeposit', postObj);
    };
    // Setter for the logged in user
    AccountService.prototype.setUser = function (user) {
        this.user = user;
    };
    AccountService.prototype.getUser = function () {
        return this.user;
    };
    AccountService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;


/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  signup works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Welcome to the welcome page my dude\r\n</p>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var access_token_service_1 = __webpack_require__("../../../../../src/app/services/access-token.service.ts");
var WelcomeComponent = (function () {
    function WelcomeComponent(accessToken) {
        this.accessToken = accessToken;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.authenticate = function () {
        this.accessToken.authenticate().subscribe(function (data) {
            console.log("I got this back: " + JSON.stringify(data));
            // Go to the Wealth Simple auth portal
            if (data["authorizeURL"]) {
                window.location.href = data["authorizeURL"];
            }
            else {
                console.log("All logged in!");
            }
        }, function (error) {
            console.log("Yo dawg, error: " + JSON.stringify(error));
        });
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [access_token_service_1.AccessTokenService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../../../../../src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var _1 = __webpack_require__("../../../../../src/app/index.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("../../../../core-js/es6/symbol.js");
__webpack_require__("../../../../core-js/es6/object.js");
__webpack_require__("../../../../core-js/es6/function.js");
__webpack_require__("../../../../core-js/es6/parse-int.js");
__webpack_require__("../../../../core-js/es6/parse-float.js");
__webpack_require__("../../../../core-js/es6/number.js");
__webpack_require__("../../../../core-js/es6/math.js");
__webpack_require__("../../../../core-js/es6/string.js");
__webpack_require__("../../../../core-js/es6/date.js");
__webpack_require__("../../../../core-js/es6/array.js");
__webpack_require__("../../../../core-js/es6/regexp.js");
__webpack_require__("../../../../core-js/es6/map.js");
__webpack_require__("../../../../core-js/es6/set.js");
__webpack_require__("../../../../core-js/es6/reflect.js");
__webpack_require__("../../../../core-js/es7/reflect.js");
__webpack_require__("../../../../zone.js/dist/zone.js");


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map