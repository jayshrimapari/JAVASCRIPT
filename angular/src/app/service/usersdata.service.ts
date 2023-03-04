import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  url="http://localhost:3000/posts";

  constructor(private httpClient:HttpClient) { }
  // users(){
  //   return this.httpClient.get(this.url);
  // }
  users(){
    return this.httpClient.get(this.url)
  }
  saveUser(data:any){
    return this.httpClient.post(this.url,data);
  }
}
