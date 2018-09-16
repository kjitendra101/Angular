import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http:HttpClient) {}
  /******* All Post  ********/
  getPosts():any{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  
  /******* All Albums  ********/
  getAlbums():any{
    return this.http.get("https://jsonplaceholder.typicode.com/albums")
  }

  /******* All Photos  ********/
  getPhotos():any{
    return this.http.get("https://jsonplaceholder.typicode.com/Photos")
  }

/*******  specific users post  ********/
  getSpecific():any{
    return this.http.get("https://jsonplaceholder.typicode.com/posts?userId=1")
  }

}
