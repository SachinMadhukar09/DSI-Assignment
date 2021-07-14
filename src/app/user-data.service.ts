import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  getUserData(){
    let apiurl="https://jsonplaceholder.typicode.com/users"
    console.log(this.getUserData)
    return this.http.get(apiurl);
  }
}

