import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }

  getAllAccounts(){
    return this.http.get('http://localhost:3000/api/getAllAccounts')
  }

}
