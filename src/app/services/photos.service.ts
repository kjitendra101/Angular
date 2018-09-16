
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) {}

  getPhotos():any{
    return this.http.get("https://jsonplaceholder.typicode.com/Photos")
  }
}

