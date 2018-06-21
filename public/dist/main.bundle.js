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

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-7\">\n            <h1>What is <b>Jackpot?</b></h1>\n            <p>\n                Wealthsimple's Jackpot products are an innovative way to help you save,\n                linking the fun and excitement of winning a lottery to savings.\n            </p>\n            <p>\n                It's a win-win for YOU - you set some money aside into our special savings\n                account, and earn chances to win prizes. While there are many prize winners, \n                those who don't win a prize are winners too because they walk away with the\n                savings they set aside.  \n            </p>\n            <p>Jackpot is an exciting way to potentially win the lottery, without any risk!</p><br>\n\n            <h1>Who are we?</h1>\n\n            <p>\n                Jackpot is backed by a team of world-class financial experts and Silicon Valley's\n                best technology talent. We've raised $165 million in capital from the Power Financial \n                Group, a leading financial holding company with $1.4 trillion in assets under administration.\n            </p>\n\n            <p>\n                Our talented team of software engineers, designers and data scientists have previously worked at such \n                as Amazon, Google and Apple. \n            </p>\n\n\n        </div>\n        <div class=\"col-lg-5\">\n           \n                <h1 style=\"font-size:60px; margin-top: 38%; margin-bottom: 35px\" align=\"center\" >$2,000,000,000</h1>\n                <p style=\"text-align: center; font-size: 25px; margin-bottom: 15px\">\n                    currently held with Wealthsimple companies\n                </p>\n                <div class=\"row\">\n                    <div class=\"col-lg-12>\" style=\"padding-top: 15px\">\n                        <div align=\"center\">\n                          <img style=\"width: 25%\" src=\"../../../images/Trophy-icon.png\">\n              \n\n                  \n                            <img style=\"width: 35%\" src=\"../../../images/big-trophy.png\">\n                \n\n                    \n                            <img style=\"width: 25%\" src=\"../../../images/Trophy-icon.png\">\n                        </div>\n                    </div>\n                </div>\n       \n            \n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n", ""]);

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

/***/ "../../../../../src/app/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\" >\n      <h1>Your Accounts</h1>\n      <div class=\"row\">\n         \n              <div class=\"card\">\n                  <div class=\"card-header\">\n                   \n                      <div class=\"toggle-switch\" (change)=\"toggleAll()\">\n                          <input type=\"checkbox\" id=\"toggle_1\">\n                          <label for=\"toggle_1\">All Accounts</label>\n                      </div>\n                  </div>\n\n                  <!-- Show all accounts -->\n                  <div *ngFor=\"let account of amountList; let i = index\">\n\n                    <div *ngIf=\"!account['active']\">\n                      <div class=\"card-block select-color\" (click)=\"loadAccount(i)\" style=\"border-bottom: 1px solid #eee;\">\n                          <div class=\"card-title\">\n                            <b>{{account[\"nickname\"]}}</b>  - {{account[\"type\"]}}\n                          </div>\n                          <div class=\"card-text\">\n\n                              Amount: $ {{account[\"amount\"]}} <br>\n                              Currency: {{account[\"currency\"]}} <br>\n                              ID: {{account[\"id\"]}}\n                          </div>\n                      </div>\n                    </div>\n\n                    <div *ngIf=\"account['active']\">\n                      <div class=\"card-block selected-color\" (click)=\"loadAccount(i)\" style=\"border-bottom: 1px solid #eee;\">\n                          <div class=\"card-title\">\n                            <b>{{account[\"nickname\"]}}</b>  - {{account[\"type\"]}}\n                          </div>\n                          <div class=\"card-text\">\n\n                              Amount: $ {{account[\"amount\"]}} <br>\n                              Currency: {{account[\"currency\"]}} <br>\n                              ID: {{account[\"id\"]}}\n                          </div>\n                      </div>\n                    </div>\n\n\n                    \n                  </div>\n\n\n                \n              </div>\n         \n      </div>\n\n    </div>\n    <div class=\"col-lg-7\" style=\"margin-left: 50px\">\n      <h1>Jackpot Deposit History</h1>\n\n      <div *ngIf=\"!noDeposit\">\n      <div *ngFor=\"let deposit of selectMongoAccounts; let i = index\">\n      <div class=\"row\">\n         \n         \n              <div class=\"card\">\n                  <div class=\"card-header\">\n                     Account: {{deposit[\"account_Id\"]}}\n                  </div>\n\n                \n                    <div class=\"card-block\">\n                        <div class=\"card-title\">\n                         History\n                        </div>\n                        <div class=\"card-text\">\n                          \n                            <div *ngFor=\"let obj of deposit['account_history']\" style=\"border-bottom: 1px solid #eee; padding-bottom: 15px\">\n                              <b>Date: </b> {{obj[\"date\"]}} <br>\n                              <b>Account balance before deposit: </b> $ {{obj[\"balanceBefore\"]}}<br>\n                              <b>Deposit amount:  </b> ${{obj[\"amount\"]}} <br>\n                              <b>Account balance after: </b> $ {{obj[\"balanceAfter\"]}}\n                              \n\n                            </div>\n                        </div>\n                    \n                  </div>\n              </div>\n              <br>\n            </div>\n        \n      </div>\n    </div>\n\n    <!-- Show if there are no deposit cards yet -->\n    <div *ngIf=\"noDeposit\">\n        <div class=\"row\">\n      \n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        Select an Account\n                    </div>\n                    <div class=\"card-text\" style=\"padding: 10px 10px 10px 10px\">\n                        {{noDepositsMessage}}\n                    </div>\n       \n             \n            </div>\n        </div>\n    </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/activity/activity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select-color:hover {\n  background-color: #F2F2F2; }\n\n.selected-color {\n  background-color: #DDDDDD; }\n", ""]);

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
var account_service_1 = __webpack_require__("../../../../../src/app/services/account.service.ts");
var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(accountService) {
        this.accountService = accountService;
        this.response = JSON.parse("{\"accounts\":{\"object\":\"account\",\"offset\":0,\"total_count\":7,\"results\":[{\"object\":\"account\",\"id\":\"tfsa-pasi0y3y\",\"type\":\"ca_tfsa\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":\"ws-jackpot\"}],\"net_liquidation\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-06-19T22:12:29Z\",\"updated_at\":\"2018-06-19T22:12:29Z\"},{\"object\":\"account\",\"id\":\"rrsp-ckcdscew\",\"type\":\"ca_rrsp\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":\"ArrrrARRsp\"}],\"net_liquidation\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-06-19T21:58:10Z\",\"updated_at\":\"2018-06-19T21:58:10Z\"},{\"object\":\"account\",\"id\":\"rrsp-xg-khkux\",\"type\":\"ca_rrsp\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":\"Doge Account xD\"}],\"net_liquidation\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-06-11T03:54:26Z\",\"updated_at\":\"2018-06-11T03:54:26Z\"},{\"object\":\"account\",\"id\":\"resp-wlx5r9wc\",\"type\":\"resp_family\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":null}],\"net_liquidation\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-31T23:31:02Z\",\"updated_at\":\"2018-05-31T23:31:02Z\"},{\"object\":\"account\",\"id\":\"rrsp-i4umimwo\",\"type\":\"ca_rrsp\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":\"wealthcomplex\"}],\"net_liquidation\":{\"amount\":\"3029.21\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"25897.43\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"10000.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-29T19:04:31Z\",\"updated_at\":\"2018-05-29T19:04:31Z\"},{\"object\":\"account\",\"id\":\"tfsa-vdguqh-x\",\"type\":\"ca_tfsa\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":\"First Account\"}],\"net_liquidation\":{\"amount\":\"17765.31\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"67300.45\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"10000.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-29T19:04:31Z\",\"updated_at\":\"2018-05-29T19:04:31Z\"},{\"object\":\"account\",\"id\":\"ca-hisa-jyqx0xjd\",\"type\":\"ca_hisa\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":\"So Smart\"}],\"net_liquidation\":{\"amount\":\"8400.35\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"8072.51\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"1000.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-29T19:04:30Z\",\"updated_at\":\"2018-05-29T19:04:30Z\"}]},\"mongoHistory\":{\"_id\":\"5b296dc3ba639713fa741dab\",\"depositHistory\":[{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"100\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_rrsp\",\"id\":\"rrsp-i4umimwo\",\"nickname\":\"\",\"amount\":\"2961.38\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"121\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_tfsa\",\"id\":\"tfsa-vdguqh-x\",\"nickname\":\"\",\"amount\":\"17259.89\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"12\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_rrsp\",\"id\":\"rrsp-i4umimwo\",\"nickname\":\"\",\"amount\":\"2961.38\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"1211\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_rrsp\",\"id\":\"rrsp-i4umimwo\",\"nickname\":\"\",\"amount\":\"2961.38\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"13\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_rrsp\",\"id\":\"rrsp-i4umimwo\",\"nickname\":\"\",\"amount\":\"2961.38\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"44\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_rrsp\",\"id\":\"rrsp-i4umimwo\",\"nickname\":\"\",\"amount\":\"2961.38\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"22\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_rrsp\",\"id\":\"rrsp-i4umimwo\",\"nickname\":\"\",\"amount\":\"2961.38\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"56\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_rrsp\",\"id\":\"rrsp-i4umimwo\",\"nickname\":\"\",\"amount\":\"2961.38\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"13\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_tfsa\",\"id\":\"tfsa-vdguqh-x\",\"nickname\":\"\",\"amount\":\"17259.89\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"34\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_tfsa\",\"id\":\"tfsa-vdguqh-x\",\"nickname\":\"\",\"amount\":\"17259.89\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"32\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_tfsa\",\"id\":\"tfsa-vdguqh-x\",\"nickname\":\"\",\"amount\":\"17259.89\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"67\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_rrsp\",\"id\":\"rrsp-i4umimwo\",\"nickname\":\"\",\"amount\":\"2961.38\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"33\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_tfsa\",\"id\":\"tfsa-vdguqh-x\",\"nickname\":\"\",\"amount\":\"17259.89\",\"currency\":\"CAD\"}},{\"depositDate\":{\"finalMM\":\"06\",\"finalDay\":\"6/19/2018\",\"dateString\":\"6/19/2018\"},\"amountDeposited\":\"43\",\"accountInfoBeforeDeposit\":{\"type\":\"ca_rrsp\",\"id\":\"rrsp-i4umimwo\",\"nickname\":\"\",\"amount\":\"2961.38\",\"currency\":\"CAD\"}}],\"client_id\":\"person-ephr7kgw-qwxww\"}}");
        this.amountList = [];
        this.toggle = false;
        this.selectAccounts = [];
        this.mongoAccounts = []; // Saved when the component loads
        this.selectMongoAccounts = []; // Used by the UI
        this.noDeposit = true;
        this.noDepositsMessage = "";
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getAllAccounts().subscribe(function (data) {
            console.log("The data: " + JSON.stringify(data));
            var accounts = data["accounts"]["results"]; //this.response["results"]
            _this.mongoAccounts = data["mongoHistory"]["depositHistory"];
            _this.amountList = [];
            // Create an array to select accounts
            for (var i = 0; i <= accounts.length - 1; i++) {
                var obj = {};
                obj["type"] = accounts[i]["type"];
                obj["id"] = accounts[i]["id"];
                // Assuming there is one owners object
                if (accounts[i]["owners"][0]["account_nickname"]) {
                    obj["nickname"] = accounts[i]["owners"][0]["account_nickname"];
                }
                else {
                    obj["nickname"] = "";
                }
                obj["amount"] = accounts[i]["net_liquidation"]["amount"];
                obj["currency"] = accounts[i]["net_liquidation"]["currency"];
                // Keep track of selected accounts by keeping a corresponding boolean variable that gets toggled
                obj["active"] = false;
                //Keep track of which depisit history (mongo) to show
                obj["mongo"] = false;
                _this.amountList.push(obj);
            }
        }, function (error) {
            var accounts = _this.response["accounts"]["results"]; //this.response["results"]
            _this.mongoAccounts = _this.response["mongoHistory"]["depositHistory"];
            _this.amountList = [];
            // Create an array to select accounts
            for (var i = 0; i <= accounts.length - 1; i++) {
                var obj = {};
                obj["type"] = accounts[i]["type"];
                obj["id"] = accounts[i]["id"];
                // Assuming there is one owners object
                if (accounts[i]["owners"][0]["account_nickname"]) {
                    obj["nickname"] = accounts[i]["owners"][0]["account_nickname"];
                }
                else {
                    obj["nickname"] = "";
                }
                obj["amount"] = accounts[i]["net_liquidation"]["amount"];
                obj["currency"] = accounts[i]["net_liquidation"]["currency"];
                _this.amountList.push(obj);
            }
            console.log("Error getting accounts: " + JSON.stringify(error));
        });
    };
    ActivityComponent.prototype.loadAccount = function (index) {
        //console.log("Setting account: " + index)
        //console.log("Here is the account list: " + JSON.stringify(this.mongoAccounts))
        //console.log("Test: " + JSON.stringify(this.amountList[index]["id"]))
        this.amountList[index]["active"] = !(this.amountList[index]["active"]);
        var currentId = this.amountList[index]["id"];
        // Update the column of mongo mongo histories
        // Insert the mongo history into the 
        if (!this.amountList[index]["mongo"]) {
            var history = this.mongoAccounts;
            console.log("The history: " + JSON.stringify(history));
            var mongoTemp = this.selectMongoAccounts;
            for (var i = 0; i <= history.length - 1; i++) {
                var mongoObj = {};
                mongoObj["account_history"] = [];
                console.log("Active id: " + currentId);
                // Check to see if there is a previous deposit from this account
                var already = false;
                var spot = 0;
                if (mongoTemp.length > 0) {
                    for (var k = 0; k <= mongoTemp.length - 1; k++) {
                        if (currentId === mongoTemp[k]["account_Id"]) {
                            already = true;
                            spot = k;
                            break;
                        }
                    }
                }
                // If account no previous deposits, create the array to contain them
                if (!already) {
                    if (currentId === history[i]["accountInfoBeforeDeposit"]["id"]) {
                        //console.log("no previous deposits!")
                        mongoObj["account_Id"] = currentId;
                        mongoObj["account_history"] = [];
                        // Create the object that will have its properties ready by the UI
                        var obj = {};
                        obj["date"] = history[i]["depositDate"]["dateString"]; // Save the date
                        obj["amount"] = history[i]["amountDeposited"]; // Save the amount
                        obj["balanceBefore"] = history[i]["accountInfoBeforeDeposit"]["amount"];
                        obj["balanceAfter"] = Number(history[i]["accountInfoBeforeDeposit"]["amount"]) - Number(history[i]["amountDeposited"]);
                        // Add the deposit history object, to the list of deposits belonging to an account
                        mongoObj["account_history"].push(obj);
                        // Add this account deposit history to the list of all accounts
                        mongoTemp.push(mongoObj);
                        this.noDepositsMessage = "";
                    }
                    else {
                        // Set a status message say are no deposits
                        this.noDepositsMessage = "There are no deposits for: " + currentId;
                    }
                    //console.log("Sanity check!!")
                    // If there are previous deposits, add to them
                }
                else {
                    var obj = {};
                    obj["date"] = history[i]["depositDate"]["dateString"]; // Save the date
                    obj["amount"] = history[i]["amountDeposited"]; // Save the amount
                    obj["balanceBefore"] = history[i]["accountInfoBeforeDeposit"]["amount"];
                    obj["balanceAfter"] = Number(history[i]["accountInfoBeforeDeposit"]["amount"]) - Number(history[i]["amountDeposited"]);
                    // Using the spot, push the new deposit object into its deposit object history array
                    mongoTemp[spot]["account_history"].push(obj);
                }
            }
            console.log("The value of mongotemp: " + JSON.stringify(mongoTemp));
            // UPdate the list of mongo accounts shown in the UI:
            this.selectMongoAccounts = mongoTemp;
            // UPdate the account to now be true
            this.amountList[index]["mongo"] = true;
            // Remove from the deposit history
        }
        else {
            console.log("Going to delete: " + currentId);
            if (this.selectMongoAccounts.length > 0) {
                console.log("step 1");
                // Find the account in the mongo list
                for (var j = 0; j <= this.selectMongoAccounts.length - 1; j++) {
                    console.log(this.selectMongoAccounts[j]["account_Id"] + " and " + currentId);
                    if (currentId === this.selectMongoAccounts[j]["account_Id"]) {
                        console.log("YESSSSS");
                        this.selectMongoAccounts.splice(j, 1);
                        break;
                    }
                }
            }
            this.amountList[index]["mongo"] = false;
        }
        this.check4Deposits();
    };
    ActivityComponent.prototype.toggleAll = function () {
        console.log("Toggling!");
        // IF false, load all accounts
        if (!this.toggle) {
            for (var i = 0; i <= this.amountList.length - 1; i++) {
                //this.amountList[i]["active"] = true
                //this.amountList[i]["mongo"] = true
                this.loadAccount(i);
            }
            this.toggle = true;
            // If true, unload all accounts
        }
        else {
            for (var i = 0; i <= this.amountList.length - 1; i++) {
                this.amountList[i]["active"] = false;
                this.amountList[i]["mongo"] = false;
                this.selectMongoAccounts = [];
            }
            this.toggle = false;
            this.noDepositsMessage = "";
        }
        this.check4Deposits();
    };
    ActivityComponent.prototype.check4Deposits = function () {
        if (this.selectMongoAccounts.length === 0) {
            this.noDeposit = true;
        }
        else {
            this.noDeposit = false;
        }
    };
    ActivityComponent = __decorate([
        core_1.Component({
            selector: 'app-activity',
            template: __webpack_require__("../../../../../src/app/activity/activity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity/activity.component.scss")]
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService])
    ], ActivityComponent);
    return ActivityComponent;
}());
exports.ActivityComponent = ActivityComponent;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n\n\n  <clr-header>\n    <div class=\"branding\">\n      <a href=\"/\" class=\"nav-link\">\n       <!-- <span class=\"clr-icon clr-clarity-logo\"></span> -->\n        <span><img style=\"width: 100%; border-radius: 10%\" src=\"../images/logo.jpg\"/></span> \n      </a>\n    </div>\n\n\n      <!-- Authenticated nav bar -->\n      <div *ngIf=\"loggedIn\" class=\"header-nav\" [clr-nav-level]=\"1\">\n\n          <!-- Left floating tabs -->\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"active\" style=\"margin-left: -70px\"><span class=\"nav-text\">Savings</span></a>\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/activity']\" routerLinkActive=\"active\" ><span class=\"nav-text\">Activity</span></a>\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/fund']\" routerLinkActive=\"active\" ><span class=\"nav-text\">Funding</span></a>\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/learn']\" routerLinkActive=\"active\" ><span class=\"nav-text\">Learn</span></a>\n\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/profile']\" routerLinkActive=\"active\" ><span class=\"nav-text\">Profile</span></a>\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/rewards']\" routerLinkActive=\"active\"><span class=\"nav-text\">Earn Rewards</span></a>\n         <!--  <a class=\"nav-link\" style=\"margin-left: 1rem\" routerLinkActive=\"active\"><clr-icon shape=\"cog\"></clr-icon></a> -->\n      \n      </div>\n\n      <div *ngIf=\"!loggedIn\" class=\"header-nav\" [clr-nav-level]=\"1\">\n\n          <span class=\"nav-text\" style=\"margin: 18px 0px 0px -110px; font-size: 30px\">Jackpot!</span>\n\n      </div>\n\n\n  </clr-header>\n\n\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n\n      <!-- If logged in, allow access to the app components -->\n      <div *ngIf=\"loggedIn\">\n        <router-outlet></router-outlet>\n      </div>\n\n\n\n\n      <!-- If not logged in, show unauthorized welcome page -->\n      <div *ngIf=\"!loggedIn\">\n        <div class=\"container\">\n        <div class=\"row\">\n\n\n          <!-- Default home page options -->\n         \n            <div class=\"col-lg-8\">  \n                <div *ngIf=\"!signingUp\">\n              <h2>\n                What if you could win a huge jackpot, <br>\n                without having to risk losing your money? <br>\n                Yes, for real.\n              </h2>\n              <p style=\"font-size: 20px\">\n                Jackpot is a lottery-linked savings account. Our accounts reward YOU for making,\n                maintaing, and growing deposits over time with cash and prizes. Play the lottery\n                free, and grow your savings while you do it. \n              </p><br>\n\n              <button class=\"btn btn-outline\" (click)=\"authenticate()\" >Login</button>\n              <!--\n              <div *ngIf=\"loading\" style=\"margin-left: auto; margin-right: auto\">\n                  <img style=\"width: 50px\" src=\"../../images/authing.gif\"/>\n              </div>\n              -->\n\n              <button class=\"btn btn-primary\" (click)=\"gotoSignup()\" >Signup</button>\n\n            </div>\n             <!-- Signup options revealed -->\n          <div *ngIf=\"signingUp\">\n              \n              <form style=\"background-color: #F2F2F2; padding-left: 15px; padding-bottom: 15px; border-radius: 5px\">\n                  <button class=\"btn btn-info-outline\" (click)=\"gotoSignup()\" style=\"margin: 0px\">Back</button>\n                  <section class=\"form-block\" style=\"margin-top: -12px\">\n                      <h1 style=\"margin-bottom: 15px\">Signin-up</h1>\n                      <div class=\"form-group\">\n                          <label for=\"formFields_9\" style=\"font-size: 20px\">First Name</label>\n                          <input type=\"url\" [(ngModel)]=\"firstName\" name=\"q\" (keyup)=\"firstNameCheck()\" id=\"formFields_9\"size=\"35\">\n                      </div>\n\n                      <div class=\"form-group\">\n                          <label for=\"formFields_10\" style=\"font-size: 20px\">Last Name </label>\n                          <input type=\"tel\" [(ngModel)]=\"lastName\"  name=\"qq\" (keyup)=\"lastNameCheck()\" id=\"formFields_10\" size=\"35\">\n                      </div>\n\n                      <div class=\"form-group\">\n                          <label for=\"formFields_10\" style=\"font-size: 20px\">Email address</label>\n                          <input type=\"tel\" [(ngModel)]=\"emailAddress\"  name=\"qqq\" (keyup)=\"emailAddressCheck()\" id=\"formFields_10\" size=\"35\">\n                      </div>\n\n                      <div class=\"form-group\">\n                          <label for=\"formFields_10\" style=\"font-size: 20px\">Phone Number</label>\n                          <input type=\"tel\" [(ngModel)]=\"phoneNumber\"  name=\"qqqq\" (keyup)=\"phoneNumberCheck()\" id=\"formFields_10\" size=\"35\">\n                      </div>\n\n                      <div class=\"checkbox\" style=\"margin-top: 20px\" (change)=\"conditionsCheck()\">\n                          <input type=\"checkbox\" id=\"checkrads_1\">\n                          <label for=\"checkrads_1\">Read and Agreed to our Terms and Conditions of Service</label>\n                      </div>\n\n                  </section>\n              </form>\n\n              <div *ngIf=\"enableSubmit\">\n                  <button class=\"btn btn-primary\" style=\"display:block; margin: 15px auto 0px auto\">Submit</button>\n              </div>\n\n              <div *ngIf=\"!enableSubmit\">\n                  <button class=\"btn btn-primary\" style=\"display:block; margin: 15px auto 0px auto\" disabled>Submit</button>\n              </div>\n              \n          </div>\n          </div>\n\n         \n\n\n          <div class=\"col-lg-4\">\n            <img style=\"width: 100%\" src=\"../../images/yello-logo.png\">\n\n          </div>\n\n      </div>    \n    </div>\n\n    </div>\n\n\n\n\n  </div>\n\n\n</div>\n\n\n</clr-main-container>\n"

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
var router_observer_service_1 = __webpack_require__("../../../../../src/app/services/router-observer.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, accessToken, accountService, ro) {
        // Subscribe to the signup component service to disable nav bar features
        //   this.subscription = this.ro.getData().subscribe(data => {                  
        //       console.log("Eyyyyoooo!")
        //       this.dataPassed = data; 
        //    }); 
        this.router = router;
        this.accessToken = accessToken;
        this.accountService = accountService;
        this.ro = ro;
        this.loading = false;
        this.loggedIn = false;
        this.signingUp = false;
        // Sign up variables
        this.firstName = "";
        this.lastName = "";
        this.phoneNumber = "";
        this.emailAddress = "";
        this.submitObj = { "firstName": false, "lastName": false, "emailAddress": false, "phoneNumber: ": false, "conditions": false };
        this.enableSubmit = false;
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
    AppComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
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
    AppComponent.prototype.gotoSignup = function () {
        console.log("switching components!!");
        this.signingUp = !this.signingUp;
        // REset the submitObj validator tracker
        this.submitObj = { "firstName": false, "lastName": false, "emailAddress": false, "phoneNumber: ": false };
    };
    // Form validator functions for signing up
    AppComponent.prototype.firstNameCheck = function () {
        if (this.firstName.length > 0) {
            this.submitObj["firstName"] = true;
        }
        else {
            this.submitObj["firstName"] = false;
        }
        this.submitButtonCheck();
    };
    AppComponent.prototype.lastNameCheck = function () {
        if (this.lastName.length > 0) {
            this.submitObj["lastName"] = true;
        }
        else {
            this.submitObj["lastName"] = false;
        }
        this.submitButtonCheck();
    };
    AppComponent.prototype.phoneNumberCheck = function () {
        if (this.phoneNumber.length >= 10) {
            this.submitObj["phoneNumber"] = true;
        }
        else {
            this.submitObj["phoneNumber"] = false;
        }
        this.submitButtonCheck();
    };
    AppComponent.prototype.emailAddressCheck = function () {
        // check for the '@' symbol
        if (this.emailAddress.indexOf('@') > -1) {
            this.submitObj["emailAddress"] = true;
        }
        else {
            this.submitObj["emailAddress"] = true;
        }
        this.submitButtonCheck();
    };
    AppComponent.prototype.submitButtonCheck = function () {
        if (this.submitObj["emailAddress"] && this.submitObj["phoneNumber"] && this.submitObj["lastName"] && this.submitObj["firstName"] && this.submitObj["conditionsCheck"]) {
            this.enableSubmit = true;
            console.log('yes!!');
        }
        else {
            this.enableSubmit = false;
            console.log('no!!!!');
        }
    };
    AppComponent.prototype.conditionsCheck = function () {
        this.submitObj["conditionsCheck"] = !(this.submitObj["conditionsCheck"]);
        this.submitButtonCheck();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            access_token_service_1.AccessTokenService,
            account_service_1.AccountService,
            router_observer_service_1.RouterObserverService])
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
var router_observer_service_1 = __webpack_require__("../../../../../src/app/services/router-observer.service.ts");
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
                account_service_1.AccountService,
                router_observer_service_1.RouterObserverService
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
    //  {path: 'signup', component: SignupComponent},
    { path: 'rewards', component: rewards_component_1.RewardsComponent },
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);


/***/ }),

/***/ "../../../../../src/app/fund/fund.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Add Savings</h3>\n<div class=\"row\">\n\n  <div class=\"col-lg-5\">\n      <form class=\"deposit-form\">\n          <section class=\"form-block\">\n              <div class=\"form-group\">\n                  <label>From</label>\n\n                  <div class=\"select\" style=\"min-width: 6.5rem\">\n                      <select id=\"exampleSelect1\" (change)=\"setAccount($event.target.value)\">\n                           <option>Select Account</option>\n\n                            <option *ngFor=\"let account of amountList; let i = index\" [value]=\"i\">\n                            \n\n                              {{account[\"nickname\"]}}\n                              (${{account[\"amount\"]}} )\n                            </option>\n                                  \n                      </select>\n                  </div>\n              </div>\n          </section>\n\n          <section class=\"form-block\">\n              <div class=\"form-group\">\n                  <label>To</label>\n\n                  <div class=\"select\" style=\"min-width: 6.5rem\">\n                      <select id=\"exampleSelect1\">\n                        <option *ngFor=\"let pot of jackpotList\">\n                          {{pot[\"account\"]}} \n                          ($ {{pot[\"amount\"]}}) \n                        \n                        </option>\n                      </select>\n                  </div>\n              </div>\n          </section>\n\n          <section class=\"form-block\">\n              <div class=\"form-group\">\n                  <label>Amount <!-- <br> <i>Max: {{currentMax}}</i> --> </label>\n            \n\n                  <input type=\"text\"  [(ngModel)]=\"enteredAmount\" name=\"first\" id=\"formFields_6\" placeholder=\"$\" (keyup)=\"enterAmount()\">\n\n\n              </div>\n          </section>\n\n          <section class=\"form-block\">\n              <div class=\"form-group\">\n                  <label>Schedule</label>\n\n                  <div class=\"select\" style=\"min-width: 6.5rem\">\n                      <select id=\"exampleSelect1\">\n                          <option>Just Once</option>\n                        <!--  <option>Monthly</option> -->\n                   \n                      </select>\n                  </div>\n              </div>\n          </section>\n\n          <!--\n          <section class=\"form-block\">\n              <div class=\"form-group\">\n                  <label>Deposit Date</label>\n\n                  <div class=\"select\" style=\"min-width: 6.5rem\">\n                      <select id=\"exampleSelect1\">\n                          <option>MB</option>\n                          <option>GB</option>\n                          <option>TB</option>\n                      </select>\n                  </div>\n              </div>\n          </section>\n        -->\n\n      </form>\n\n     \n      \n\n  </div>\n\n  <div class=\"col-lg-7\">\n\n      <div class=\"row\" style=\"margin-top: 0%\">\n      \n              <div class=\"card\" style=\"display:block; margin-left: auto; margin-right: auto; max-width: 400px\">\n                  <div class=\"card-header\">\n                      Deposit Submission Form\n                  </div>\n                  <div class=\"card-block\">\n                      <div class=\"card-title\">\n                          Account Selected: {{selectedFromAccount}}\n                      </div>\n                      <div class=\"card-text\">\n                          Amount: ${{enteredAmount}}  <br>\n                          To: Jackpot <br>\n                          Schedule: Just Once\n\n                      </div>\n                  </div>\n                  <div class=\"card-footer\">\n                      <button class=\"btn btn-sm btn-link\">Clear</button>\n                    \n                  </div>\n              </div>\n          \n      </div>\n\n      <div *ngIf=\"!enableDeposit\">\n          <button class=\"btn btn-primary\" style=\"display:block; margin-left: auto; margin-right: auto; margin-top: 30px\" disabled>Submit Deposit To Jackpot</button>\n      </div>\n      <div *ngIf=\"enableDeposit\">\n          <button class=\"btn btn-primary\" (click)=\"submitDeposit()\" style=\"display:block; margin-left: auto; margin-right: auto; margin-top: 30px\">Submit Deposit To Jackpot</button>\n      </div>\n\n      <h6 align=\"center\"> {{statusMessage}}</h6>\n \n    \n    </div>\n</div>\n</div>"

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
// TODO: Subtract amounts avaible in each account in the drop down
var FundComponent = /** @class */ (function () {
    function FundComponent(accountService) {
        this.accountService = accountService;
        this.response = JSON.parse("{\"object\":\"account\",\"offset\":0,\"total_count\":5,\"results\":[{\"object\":\"account\",\"id\":\"rrsp-xg-khkux\",\"type\":\"ca_rrsp\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":\"Doge Account xD\"}],\"net_liquidation\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-06-11T03:54:26Z\",\"updated_at\":\"2018-06-11T03:54:26Z\"},{\"object\":\"account\",\"id\":\"resp-wlx5r9wc\",\"type\":\"resp_family\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":null}],\"net_liquidation\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-31T23:31:02Z\",\"updated_at\":\"2018-05-31T23:31:02Z\"},{\"object\":\"account\",\"id\":\"rrsp-i4umimwo\",\"type\":\"ca_rrsp\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":null}],\"net_liquidation\":{\"amount\":\"2961.38\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"25718.14\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"10000.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-29T19:04:31Z\",\"updated_at\":\"2018-05-29T19:04:31Z\"},{\"object\":\"account\",\"id\":\"tfsa-vdguqh-x\",\"type\":\"ca_tfsa\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":null}],\"net_liquidation\":{\"amount\":\"17259.89\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"66532.53\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"10000.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-29T19:04:31Z\",\"updated_at\":\"2018-05-29T19:04:31Z\"},{\"object\":\"account\",\"id\":\"ca-hisa-jyqx0xjd\",\"type\":\"ca_hisa\",\"nickname\":null,\"base_currency\":\"CAD\",\"external_id\":null,\"status\":\"open\",\"owners\":[{\"client_id\":\"person-ephr7kgw-qwxww\",\"ownership_type\":\"primary\",\"account_nickname\":null}],\"net_liquidation\":{\"amount\":\"8349.88\",\"currency\":\"CAD\"},\"gross_position\":{\"amount\":\"8028.7\",\"currency\":\"CAD\"},\"total_deposits\":{\"amount\":\"1000.0\",\"currency\":\"CAD\"},\"total_withdrawals\":{\"amount\":\"0.0\",\"currency\":\"CAD\"},\"created_at\":\"2018-05-29T19:04:30Z\",\"updated_at\":\"2018-05-29T19:04:30Z\"}]}");
        this.amountList = [];
        this.accountIndex = 0;
        this.currentMax = 0;
        this.enableDeposit = false;
        this.enableDesosit2 = false;
        this.enteredAmount = "";
        this.selectedFromAccount = "";
        this.statusMessage = "";
        this.jackpotList = [];
    }
    FundComponent.prototype.ngOnInit = function () {
        // Get all accounts associated with the logged in user:
        var _this = this;
        this.accountService.getAllAccounts().subscribe(function (data) {
            console.log("Holy shit i got this: " + JSON.stringify(data));
            var accounts = data["accounts"]["results"];
            _this.amountList = [];
            // Create an array to select accounts
            for (var i = 0; i <= accounts.length - 1; i++) {
                var obj = {};
                obj["type"] = accounts[i]["type"];
                obj["id"] = accounts[i]["id"];
                // Assuming there is one owners object
                if (accounts[i]["owners"][0]["account_nickname"]) {
                    obj["nickname"] = accounts[i]["owners"][0]["account_nickname"];
                }
                else {
                    obj["nickname"] = "";
                }
                obj["amount"] = accounts[i]["net_liquidation"]["amount"];
                obj["currency"] = accounts[i]["net_liquidation"]["currency"];
                // Do not put in the ws-jackpot account
                console.log("Checking this account: " + obj["nickname"]);
                if (obj["nickname"] != " - ws-jackpot") {
                    console.log("Skipped the jackpot account");
                    _this.amountList.push(obj);
                }
            }
            console.log("Here is the amoutlist: " + JSON.stringify(_this.amountList));
            // Insert the current jackpot amount
            _this.jackpotList = [];
            // There is only one jackpot amount, and its hard coded
            var temp = {};
            temp["amount"] = 1500000;
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
        console.log("Here is the selected account: " + JSON.stringify(this.amountList[this.accountIndex]));
        console.log("Proposing this max amount: " + max["amount"]);
        console.log("COmparing: " + this.enteredAmount + " and " + this.currentMax);
        if (Number(this.enteredAmount) < this.currentMax && this.enteredAmount != "") {
            this.enableDeposit = true;
        }
        else {
            this.enableDeposit = false;
        }
    };
    FundComponent.prototype.setAccount = function (thing) {
        this.statusMessage = "";
        console.log('Got this index: ' + thing);
        if (thing != "Select Account") {
            this.accountIndex = thing;
            // this.selectedFromAccount = this.amountList[this.accountIndex]["nickname"]
            console.log("I want to set this nickname: " + this.amountList[this.accountIndex]);
            console.log("Set the account from here: " + JSON.stringify(this.amountList[thing]));
            var name = this.amountList[thing]["nickname"];
            this.selectedFromAccount = name;
            this.check4Account();
            this.getMaxAmount();
        }
    };
    FundComponent.prototype.enterAmount = function () {
        console.log("Can I enter this amount: " + this.enteredAmount);
        var num = Number(this.enteredAmount);
        console.log("This is num: " + num);
        if (isNaN(num) || num == 0) {
            console.log("Not a number!!!!!");
            this.enableDeposit = false;
        }
        else {
            if (num < this.currentMax) {
                console.log("Yep, enable because: " + num + " < " + this.currentMax);
                this.enableDeposit = true;
            }
            else {
                console.log("Nope, enable because: " + num + " > " + this.currentMax);
                this.enableDeposit = false;
            }
        }
        console.log("Value of deposit2: " + this.enableDesosit2);
    };
    // Submit the deposit to the backend for processing
    FundComponent.prototype.submitDeposit = function () {
        var _this = this;
        this.enableDeposit = false;
        var obj = {};
        obj["info"] = this.amountList[this.accountIndex];
        obj["amount"] = this.enteredAmount;
        obj['date'] = this.getDate();
        this.enteredAmount = "";
        console.log("I will send this objet: " + JSON.stringify(obj));
        this.accountService.postJackpotDeposit(obj).subscribe(function (data) {
            console.log("Got this back after a successful post: " + data);
            // SHow status message
            _this.statusMessage = "Successfully Deposited!";
        }, function (error) {
            console.log("Error sending deposit info: " + JSON.stringify(error));
            _this.statusMessage = "Unable to deposit at this time. ";
        });
    };
    FundComponent.prototype.check4Account = function () {
        if (this.selectedFromAccount != "") {
            this.enableDesosit2 = true;
        }
        else {
            this.enableDesosit2 = false;
        }
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

module.exports = "<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-lg-5\">\n        <h1>Welcome, {{user}}</h1>\n        <h3>Your current savings in Jackpot:</h3>\n\n     <!--   <img width=\"50%\" style=\" display: block; margin: 10px auto 0px auto\" src=\"../../../images/orange-circle.png\"> -->\n\n        <div class=\"circle-container\" style=\"margin-top: 10px\">\n                <img src=\"../../../images/orange-circle.png\" style=\"width:80%; margin-top: 10%\">\n                <div class=\"centered\" style=\"margin-top: 5%\">${{investmentAmount}}</div>\n        </div>\n\n    </div>\n    <div class=\"col-lg-7\">\n        <div class=\"row\">\n                <div class=\"col-lg-12\">\n                       <h1 align=\"center\" >Jackpot by Wealthsimple</h1>\n                </div>\n        </div>\n\n        <div class=\"row\">\n                <div class=\"col-lg-6\">\n                       <img style=\"border-radius: 20%; margin-top: 20px; display: block; margin-left: auto; margin-right: auto \" src=\"../../../images/slots.jpg\">\n                     \n\n                </div>\n\n                <div class=\"col-lg-6\">\n                       <h3 style=\"padding-bottom: 14px\"><b>Next Draw: </b> {{nextDraw}}</h3>\n                       <h3 style=\"padding-bottom: 14px\"><b>Jackpot: </b> $1,500,000</h3>\n                       <h3 style=\"padding-bottom: 14px\"><b>Odds*: </b> 1/3</h3>\n                       <h3 style=\"padding-bottom: 14px\"><b>Your Entries: </b> {{entries}}</h3>\n\n                       \n                 </div>\n\n\n        </div>\n        <div class=\"row\" style=\"padding-top: 12px\">\n                <button style=\"display: block; margin-left: auto; margin-right: auto\" (click)=\"gotoFunding()\" class=\"btn btn-primary\">Fund Account</button>\n                <button style=\"display: block; margin-left: auto; margin-right: auto\" class=\"btn btn-primary\">Savings Insight</button>\n\n        </div>\n\n        <div class=\"row\" style=\"margin-top: 22px\">\n                <div class=\"col-lg-12\" style=\"background-color: #FFB565; padding: 0px 20px 20px 20px;\">\n                    <p style=\"font-size: 16px; text-align: center\">\n                      <span style=\"color: white\">Want to turn your savings into income? </span> <a href=\"https://www.wealthsimple.com/en-ca/details\"> Learn more about Wealthsimple products\n                       here, and get your first $10,000 managed for free.</a>\n                    </p>\n                </div>\n        </div>\n\n\n    </div>\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Container holding the image and the text */\n.circle-container {\n  position: relative;\n  text-align: center; }\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 40px; }\n", ""]);

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// Services 
var access_token_service_1 = __webpack_require__("../../../../../src/app/services/access-token.service.ts");
var account_service_1 = __webpack_require__("../../../../../src/app/services/account.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(accessToken, router, accountService) {
        this.accessToken = accessToken;
        this.router = router;
        this.accountService = accountService;
        this.user = "";
        this.nextDraw = "Friday, June 22nd";
        this.entries = 0;
        this.jackpot = 1500000;
        this.investmentAmount = 0;
    }
    // totalInvestmentAmount: String = "$7502"
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("We loaded to home");
        this.accountService.getPerson().subscribe(function (data) {
            console.log("Got this: " + JSON.stringify(data));
            // Assume there is one person result that comes back
            var person = {};
            person = data["personBody"]["results"][0];
            //console.log("The total amount: " + data["totalAmount"])
            _this.investmentAmount = data["totalInvestment"];
            _this.entries = data["baseBallots"];
            _this.user = person["preferred_first_name"];
            _this.accountService.setPersonInfo(person);
        }, function (error) {
            console.log('Error getting person information');
            var data = "";
            data = "{\n                \"object\": \"person\",\n                \"offset\": 0,\n                \"total_count\": 1,\n                \"results\": [\n                    {\n                        \"id\": \"person-ephr7kgw-qwxww\",\n                        \"user_id\": \"user-APE2fikk71w\",\n                        \"object\": \"person\",\n                        \"email\": \"hackthesix+user8@wealthsimple.com\",\n                        \"preferred_first_name\": \"Given8\",\n                        \"gender\": \"male\",\n                        \"date_of_birth\": \"1945-05-18\",\n                        \"country_of_birth\": null,\n                        \"locale\": \"en-CA\",\n                        \"external_id\": null,\n                        \"jurisdictions\": [\n                            \"CA\"\n                        ],\n                        \"citizenships\": [\n                            \"CA\"\n                        ],\n                        \"marital_status\": null,\n                        \"full_legal_name\": {\n                            \"first_name\": \"Dawn Rutledge\",\n                            \"middle_names\": null,\n                            \"last_name\": \"Maldonado\"\n                        },\n                        \"residential_address\": {\n                            \"unit\": null,\n                            \"street_number\": \"123\",\n                            \"street_name\": \"Queen Street West\",\n                            \"city\": \"Toronto\",\n                            \"province_state_region\": \"ON\",\n                            \"postal_code\": \"M5H3M9\",\n                            \"country\": \"CA\"\n                        },\n                        \"mailing_address\": {\n                            \"unit\": null,\n                            \"street_number\": \"123\",\n                            \"street_name\": \"Queen Street West\",\n                            \"city\": \"Toronto\",\n                            \"province_state_region\": \"ON\",\n                            \"postal_code\": \"M5H3M9\",\n                            \"country\": \"CA\"\n                        },\n                        \"employment\": {\n                            \"status\": \"unemployed\"\n                        },\n                        \"phone_numbers\": [\n                            {\n                                \"primary\": true,\n                                \"country_code\": \"1\",\n                                \"number\": \"5493928778\",\n                                \"type\": \"home\"\n                            }\n                        ],\n                        \"insiders\": [],\n                        \"tax_identification_numbers\": [\n                            {\n                                \"type\": \"ca_sin_itn\",\n                                \"number\": \"*****0020\"\n                            }\n                        ],\n                        \"regulated_people\": [],\n                        \"politically_exposed_people\": [],\n                        \"dependents\": [],\n                        \"created_at\": \"2018-05-29T18:55:15Z\",\n                        \"updated_at\": \"2018-05-29T18:57:15Z\"\n                    }\n                ]\n            }";
            var person = {};
            //  console.log("Test: " + JSON.stringify(data["results"]))
            person = JSON.parse(data)["results"][0];
            _this.user = person["preferred_first_name"];
            _this.accountService.setPersonInfo(person);
        });
    };
    HomeComponent.prototype.gotoFunding = function () {
        console.log("Switchin to fund!");
        this.router.navigate(['/fund']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [access_token_service_1.AccessTokenService,
            router_1.Router,
            account_service_1.AccountService])
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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8\">\n      <div class=\"cosy\" style=\"  padding-left: 30px;  background-color: #F2F2F2;\n      padding: 1px 10px 15px 15px;\n      margin: 10px 0px 10px 10px;\n      border-radius: 5px\">\n        <h3 style=\"margin-bottom: 10px\"><b>Preffered name: </b></h3> <span class=\"mySpan\">{{person[\"preferred_first_name\"]}}</span>\n\n        <h3 style=\"margin-bottom: 10px\"><b>Email: </b></h3> <span class=\"mySpan\">{{person[\"email\"]}}</span>\n\n        <h3 style=\"margin-bottom: 10px\"><b>First Name: </b></h3> <span class=\"mySpan\">{{person[\"full_legal_name\"][\"first_name\"]}}</span>\n\n        <h3 style=\"margin-bottom: 10px\"><b>Last Name: </b></h3> <span class=\"mySpan\">{{person[\"full_legal_name\"][\"last_name\"]}}</span>\n\n        <h3 style=\"margin-bottom: 10px\"><b>Phone Number: </b></h3> <span class=\"mySpan\">{{person[\"phone_numbers\"][0][\"number\"]}}</span>\n\n        <button style=\"float: right; margin-top: -15px\" class=\"btn btn-success-outline\">Edit</button>\n\n      </div>\n\n    </div>\n    <div class=\"col-lg-4\">\n      <h3 style=\"margin-top: 17%; margin-bottom: 10px\" align=\"center\">Active Profile Pic</h3>\n      <img  style=\"border-radius: 6px; display: block; margin-left: auto; margin-right: auto\"  src=\"../../../images/ironman.jpg\">\n      </div>\n\n     \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cozy {\n  padding-left: 30px;\n  padding-bottom: 1px;\n  margin: 10px 0px 10px 10px;\n  border-radius: 5px; }\n\n.mySpan {\n  font-size: 18px;\n  margin-top: 7px; }\n", ""]);

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
var account_service_1 = __webpack_require__("../../../../../src/app/services/account.service.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(accountService) {
        this.accountService = accountService;
        this.person = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.person = (this.accountService.getPersonInfo()); //["results"][0]
        console.log("Value of this person: " + JSON.stringify(this.person));
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "../../../../../src/app/rewards/rewards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Your Rewards</h1>\n    <div class=\"row\">\n\n        <div *ngIf=\"showDepositReward\" class=\"col-lg-6 \">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Invest an additional: $25\n                    <span style=\"float:right; font-size: 15px\"><i> Completed!</i></span>\n                </div>\n                <div class=\"card-block\">\n                  \n                    <div class=\"card-text\">\n                      By reaching this target investmount amoun each month, users are guaranteed entry into next month's Jackpot draw. \n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <button class=\"btn btn-sm btn-link\" (click)=\"hideReward('deposit')\">Hide Reward</button>\n     \n                </div>\n            </div>\n        </div>\n\n        <div *ngIf=\"showReferralReward\" class=\"col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Invite Friends\n                    <span style=\"float:right; font-size: 15px\"> (+1) Succesful referral this month</span>\n                </div>\n                <div class=\"card-block\">\n                    \n                    <div class=\"card-text\">\n                        Invite friends to Jackpot and earn an additional 3 ballots for each friend that funds their account.\n                    </div>\n\n                    <div class=\"form-group\" style=\"margin-bottom: 15px\">\n                        <label for=\"formFields_10\">Email: </label>\n                        <input type=\"tel\" id=\"formFields_10\" size=\"35\">\n                        <button class=\"btn btn-outline\" style=\"float:right\">Send</button>\n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <button class=\"btn btn-sm btn-link\" (click)=\"hideReward('refer')\">Hide Reward</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"showReturn\">\n        <button class=\"btn btn-link\" (click)=\"showRewards()\">Unhide Rewards</button>\n      </div>\n</div>"

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
        this.showDepositReward = true;
        this.showReferralReward = true;
        this.showReturn = false;
    }
    RewardsComponent.prototype.ngOnInit = function () {
    };
    RewardsComponent.prototype.hideReward = function (type) {
        if (type === "deposit") {
            this.showDepositReward = false;
        }
        if (type === "refer") {
            this.showReferralReward = false;
        }
        if (!this.showDepositReward && !this.showReferralReward) {
            this.showReturn = true;
        }
        else {
            this.showReturn = false;
        }
    };
    RewardsComponent.prototype.showRewards = function () {
        this.showDepositReward = true;
        this.showReferralReward = true;
        this.showReturn = false;
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
var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.user = "loading...";
        this.person = {};
    }
    // Get all accounts for a user
    AccountService.prototype.getAllAccounts = function () {
        return this.http.get('http://localhost:3000/api/getAllAccounts');
    };
    // Save in the mongo db the record for making a deposit into the jackpot account
    AccountService.prototype.postJackpotDeposit = function (postObj) {
        return this.http.post('http://localhost:3000/api/postJackpotDeposit', postObj);
    };
    AccountService.prototype.getPerson = function () {
        return this.http.get('http://localhost:3000/api/getPerson');
    };
    // Setter for the logged in user
    AccountService.prototype.setUser = function (user) {
        this.user = user;
    };
    AccountService.prototype.getUser = function () {
        return this.user;
    };
    // Setter and Getter for the Wealthsimple Person record
    AccountService.prototype.setPersonInfo = function (person) {
        this.person = person;
    };
    AccountService.prototype.getPersonInfo = function () {
        return this.person;
    };
    AccountService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;


/***/ }),

/***/ "../../../../../src/app/services/router-observer.service.ts":
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
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var RouterObserverService = /** @class */ (function () {
    function RouterObserverService() {
        this.subject = new Subject_1.Subject();
    }
    RouterObserverService.prototype.sendData = function (message) {
        this.subject.next(message);
    };
    RouterObserverService.prototype.clearData = function () {
        this.subject.next();
    };
    RouterObserverService.prototype.getData = function () {
        return this.subject.asObservable();
    };
    RouterObserverService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], RouterObserverService);
    return RouterObserverService;
}());
exports.RouterObserverService = RouterObserverService;


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
var router_observer_service_1 = __webpack_require__("../../../../../src/app/services/router-observer.service.ts");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(ro) {
        this.ro = ro;
    }
    SignupComponent.prototype.ngOnInit = function () {
        // send message to subscribers via observable subject
        this.ro.sendData('Message from Child One Component!');
    };
    SignupComponent.prototype.sendData = function () {
        this.ro.sendData('Message from button Click on Child One');
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        // clear message
        this.ro.clearData();
    };
    SignupComponent.prototype.clearData = function () {
        // clear message
        this.ro.clearData();
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [router_observer_service_1.RouterObserverService])
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