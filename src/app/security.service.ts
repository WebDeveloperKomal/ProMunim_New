import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  // constructor() { }
  
  credentials!:{email:string,password:string};

  constructor(private http : HttpClient) { }

  baseUrl="http://localhost:8181";

  Login(credentials:{email:string,password:string})
  {
    this.credentials=credentials;
    return this.http.post(`${this.baseUrl}/login`,credentials);
  }

  IsLoggedIn()
  {
    let token = localStorage.getItem("token");
    
    if(token==undefined || token==='' || token==null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  getUserData():any{
    return this.http.get(`${this.baseUrl}/user-profile`);
  }
}
