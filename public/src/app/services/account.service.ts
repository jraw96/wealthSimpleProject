import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }

  user: String = "loading..."
  person: any = {}

  // Get all accounts for a user
  getAllAccounts(){
    return this.http.get('http://localhost:3000/api/getAllAccounts')
  }

  // Save in the mongo db the record for making a deposit into the jackpot account
  postJackpotDeposit(postObj){
    return this.http.post('http://localhost:3000/api/postJackpotDeposit', postObj)
  }

  getPerson(){
    return this.http.get('http://localhost:3000/api/getPerson')
  }

  // Setter for the logged in user
  setUser(user){
    this.user = user
  }

  getUser(){
    return this.user
  }

  // Setter and Getter for the Wealthsimple Person record
  setPersonInfo(person){
    this.person = person
  }

  getPersonInfo(){
    return this.person
  }

}
