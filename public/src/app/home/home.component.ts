
import { Component, OnInit} from "@angular/core";

// Services 
import { AccessTokenService } from "../services/access-token.service"
import { AccountService } from "../services/account.service"

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    constructor(private accessToken: AccessTokenService,
                private accountService: AccountService){}

    user: String = ""

    nextDraw: String = "Friday, June 22nd"
    entries: Number = 33
    jackpot: Number = 1500000


    totalInvestmentAmount: String = "$7502"

    ngOnInit() {
        console.log("We loaded to home")


        this.accountService.getPerson().subscribe(data =>{

            console.log("Got this: " + JSON.stringify(data))
            // Assume there is one person result that comes back
          
            var person = {}
            person = data["results"][0]

            this.user = person["preferred_first_name"]

            this.accountService.setPersonInfo(person)


        }, error =>{
            console.log('Error getting person information')

            var data = ""
            data = `{
                "object": "person",
                "offset": 0,
                "total_count": 1,
                "results": [
                    {
                        "id": "person-ephr7kgw-qwxww",
                        "user_id": "user-APE2fikk71w",
                        "object": "person",
                        "email": "hackthesix+user8@wealthsimple.com",
                        "preferred_first_name": "Given8",
                        "gender": "male",
                        "date_of_birth": "1945-05-18",
                        "country_of_birth": null,
                        "locale": "en-CA",
                        "external_id": null,
                        "jurisdictions": [
                            "CA"
                        ],
                        "citizenships": [
                            "CA"
                        ],
                        "marital_status": null,
                        "full_legal_name": {
                            "first_name": "Dawn Rutledge",
                            "middle_names": null,
                            "last_name": "Maldonado"
                        },
                        "residential_address": {
                            "unit": null,
                            "street_number": "123",
                            "street_name": "Queen Street West",
                            "city": "Toronto",
                            "province_state_region": "ON",
                            "postal_code": "M5H3M9",
                            "country": "CA"
                        },
                        "mailing_address": {
                            "unit": null,
                            "street_number": "123",
                            "street_name": "Queen Street West",
                            "city": "Toronto",
                            "province_state_region": "ON",
                            "postal_code": "M5H3M9",
                            "country": "CA"
                        },
                        "employment": {
                            "status": "unemployed"
                        },
                        "phone_numbers": [
                            {
                                "primary": true,
                                "country_code": "1",
                                "number": "5493928778",
                                "type": "home"
                            }
                        ],
                        "insiders": [],
                        "tax_identification_numbers": [
                            {
                                "type": "ca_sin_itn",
                                "number": "*****0020"
                            }
                        ],
                        "regulated_people": [],
                        "politically_exposed_people": [],
                        "dependents": [],
                        "created_at": "2018-05-29T18:55:15Z",
                        "updated_at": "2018-05-29T18:57:15Z"
                    }
                ]
            }`

            var person = {}
          //  console.log("Test: " + JSON.stringify(data["results"]))
            person = JSON.parse(data)["results"][0]

            this.user = person["preferred_first_name"]

            this.accountService.setPersonInfo(person)

        })

      }
}
