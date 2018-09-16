import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) {}

  getTodos():any{
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }

}
