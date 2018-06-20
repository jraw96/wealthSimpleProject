import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }

  user: String = "loading..."

  getAllAccounts(){
    return this.http.get('http://localhost:3000/api/getAllAccounts')
  }

  postJackpotDeposit(postObj){
    return this.http.post('http://localhost:3000/api/postJackpotDeposit', postObj)
  }

  // Setter for the logged in user
  setUser(user){
    this.user = user
  }

  getUser(){
    return this.user
  }

}
