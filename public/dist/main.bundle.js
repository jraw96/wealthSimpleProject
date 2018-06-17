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

module.exports = "<!--\n  ~ Copyright (c) 2016 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\nMore big money\n"

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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AboutComponent = /** @class */ (function () {
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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n\n\n  <clr-header>\n    <div class=\"branding\">\n      <a href=\"/\" class=\"nav-link\">\n       <!-- <span class=\"clr-icon clr-clarity-logo\"></span> -->\n        <span><img style=\"width: 30%; \" src=\"../images/wealthsimple-circle.svg\"/></span> \n      </a>\n    </div>\n\n\n      <!-- Authenticated nav bar -->\n      <div *ngIf=\"loggedIn\" class=\"header-nav\" [clr-nav-level]=\"1\">\n\n          <!-- Left floating tabs -->\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span class=\"nav-text\">Home</span></a>\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/fund']\" routerLinkActive=\"active\" ><span class=\"nav-text\">Fund</span></a>\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/profile']\" routerLinkActive=\"active\" ><span class=\"nav-text\">Profile</span></a>\n\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/rewards']\" routerLinkActive=\"active\"><span class=\"nav-text\">Earn Rewards</span></a>\n          <a class=\"nav-link\" style=\"margin-left: 1rem\" routerLinkActive=\"active\"><clr-icon shape=\"cog\"></clr-icon></a>\n\n        \n          \n      </div>\n\n      <!-- Unauthetnicated nav bar \n      <div *ngIf=\"!loggedIn\" class=\"header-nav\" [clr-nav-level]=\"1\">\n\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/signup']\" routerLinkActive=\"active\" style=\"margin-left: -100%\"><span class=\"nav-text\">Sign-up</span></a>\n          \n      </div>\n    -->\n\n<!--\n    <div class=\"header-actions\">\n    </div>\n\n  -->\n  \n  </clr-header>\n\n\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n\n      <!-- If logged in, allow access to the app components -->\n      <div *ngIf=\"loggedIn\">\n        <router-outlet></router-outlet>\n      </div>\n\n      <!-- If not logged in, show unauthorized welcome page -->\n      <div *ngIf=\"!loggedIn\">\n        <p>Welcome to Jackpot by Wealthsimple\n\n\n\n\n\n\n        </p>\n        <button class=\"btn btn-outline\" (click)=\"authenticate()\" >Login</button>\n        <div *ngIf=\"loading\" style=\"margin-left: auto; margin-right: auto\">\n            <img style=\"width: 50px\" src=\"../../images/authing.gif\"/>\n        </div>\n\n        <button class=\"btn btn-primary\">Signup</button>\n      </div>\n\n\n\n      \n    </div>\n  </div>\n\n\n\n\n\n\n\n\n</clr-main-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clr-icon.clr-clarity-logo {\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%3C!--  ~ Copyright (c) 2016 VMware%2C Inc. All Rights Reserved.  ~ This software is released under MIT license.  ~ The full license information can be found in LICENSE in the root directory of this project.  --%3E%3Csvg width%3D%2236px%22 height%3D%2236px%22 viewBox%3D%220 0 36 36%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 40.3 (33839) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Elogo%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22logo%22 transform%3D%22translate(0.000000%2C 4.500000)%22%3E            %3Cg id%3D%22large%22 transform%3D%22translate(0.000000%2C 0.044118)%22%3E                %3Cpolyline id%3D%22Fill-3%22 fill%3D%22%230095D3%22 points%3D%2224.7018129 0.0388840336 35.979641 6.71768066 35.9614589 20.2811697 24.7018129 26.9417748 18.0173463 22.9707846 29.6688177 16.4295126 29.6688177 10.5321277 24.9216504 7.92742184 18.0321077 3.99030785%22%3E%3C%2Fpolyline%3E                %3Cpolyline id%3D%22Fill-4%22 fill%3D%22%23F38B00%22 points%3D%2211.3313965 0.0388840336 0.0535685039 6.71768066 0.0717505512 20.2811697 11.3313965 26.9417748 18.0166889 22.970061 7.35448694 16.4295126 7.35448694 10.5321277 18.0324642 3.98991663%22%3E%3C%2Fpolyline%3E                %3Cpolyline id%3D%22Fill-5%22 fill%3D%22%23004B70%22 points%3D%2218.017374 22.9708988 11.4990488 18.9719838 18.0212495 15.1272387 24.9510827 19.0786297%22%3E%3C%2Fpolyline%3E                %3Cpolyline id%3D%22Fill-6%22 fill%3D%22%2398441E%22 points%3D%2218.0314053 3.98921729 11.5267517 7.97364692 18.0439938 11.8578324 24.9058951 7.91831944%22%3E%3C%2Fpolyline%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n  height: 36px;\n  width: 36px;\n  margin-right: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var access_token_service_1 = __webpack_require__("../../../../../src/app/services/access-token.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, accessToken) {
        this.router = router;
        this.accessToken = accessToken;
        this.loading = false;
        this.loggedIn = false;
    }
    // Check to see if the browser session has a valid, authenticated session in the server
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessToken.getSessionInfo().subscribe(function (data) {
            // For successful authentication, enable the authenticated views:
            _this.loggedIn = true;
        }, function (error) {
            // If there is a 4.x error, it means the current session is not authenticated. 
            // Set the webpage to display the non-authentiected view
            _this.loggedIn = false;
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
        __metadata("design:paramtypes", [router_1.Router, access_token_service_1.AccessTokenService])
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
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
// Services
var access_token_service_1 = __webpack_require__("../../../../../src/app/services/access-token.service.ts");
var fund_component_1 = __webpack_require__("../../../../../src/app/fund/fund.component.ts");
var rewards_component_1 = __webpack_require__("../../../../../src/app/rewards/rewards.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var signup_component_1 = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var welcome_component_1 = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
var AppModule = /** @class */ (function () {
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
                welcome_component_1.WelcomeComponent
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
            providers: [access_token_service_1.AccessTokenService],
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
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var fund_component_1 = __webpack_require__("../../../../../src/app/fund/fund.component.ts");
var signup_component_1 = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var rewards_component_1 = __webpack_require__("../../../../../src/app/rewards/rewards.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var welcome_component_1 = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
exports.ROUTES = [
    // {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '', component: welcome_component_1.WelcomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'fund', component: fund_component_1.FundComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'rewards', component: rewards_component_1.RewardsComponent },
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);


/***/ }),

/***/ "../../../../../src/app/fund/fund.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  fund works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/fund/fund.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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
var FundComponent = /** @class */ (function () {
    function FundComponent() {
    }
    FundComponent.prototype.ngOnInit = function () {
    };
    FundComponent = __decorate([
        core_1.Component({
            selector: 'app-fund',
            template: __webpack_require__("../../../../../src/app/fund/fund.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fund/fund.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FundComponent);
    return FundComponent;
}());
exports.FundComponent = FundComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "Congrats, you are successfully authenticated!"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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
var HomeComponent = /** @class */ (function () {
    function HomeComponent(accessToken) {
        this.accessToken = accessToken;
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

module.exports = "<p>\n  profile works!\n</p>\n"

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
var ProfileComponent = /** @class */ (function () {
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

module.exports = "<p>\n  rewards works!\n</p>\n"

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
var RewardsComponent = /** @class */ (function () {
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
var AccessTokenService = /** @class */ (function () {
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

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

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
var SignupComponent = /** @class */ (function () {
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

module.exports = "<p>\n  Welcome to the welcome page my dude\n</p>\n\n"

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
var WelcomeComponent = /** @class */ (function () {
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