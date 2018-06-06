import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccessTokenService {

  constructor(private http: HttpClient) { }

  // Request the access token using the backend API
  authenticate(){
    return this.http.get('http://localhost:3000/api/evenDeeper')
    
  }

}
