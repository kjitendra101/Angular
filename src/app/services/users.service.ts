import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {}

  getUsers():any{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  addUser(user){
    return this.http.post(" https://jsonplaceholder.typicode.com/posts",user)
  }
}

