import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  users(){
    return this.http.get('http://192.168.0.45:8080/auth/get-customer-complaints/88888888');
  }
}
// 192.168.0.45:8080/get-all-customer