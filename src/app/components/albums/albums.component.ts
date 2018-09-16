import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
declare var $: any, jquiry: any, jQuiry: any;
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumsList: Array<object>
  constructor(private albums: PostsService) {
    this.albumsList = [];
  }

  ngOnInit() {
    this.albums.getAlbums().subscribe(response => {this.albumsList = response;})
  }

}
