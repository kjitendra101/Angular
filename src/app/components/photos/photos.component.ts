import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
declare var $: any, jquiry: any, jQuiry: any;

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photosList: Array<object>


  constructor(private photos: PostsService) {
    this.photosList = [];
   
  }

  ngOnInit() {
    this.photos.getPhotos().subscribe(response => {this.photosList = response;})
  }

}
