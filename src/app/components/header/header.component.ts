import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { AlbumsService } from '../../services/albums.service';
import { PhotosService } from '../../services/photos.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  commentsCount:number;
  albumsCount:number;
  photosCount:number;

  constructor(private commentsService:CommentsService, private AlbumsService:AlbumsService, private PhotosService:PhotosService) { 
    this.commentsCount=0;
    this.albumsCount=0;
    this.photosCount=0;
  }

  ngOnInit() {


    $(".search-open").click(function(){
      $(".search-open").toggleClass("active");
      $(".search-inline").toggleClass("main");
  });

    // var sp = document.querySelector('.search-open');
    // var searchbar = document.querySelector('.search-inline');
    // var shclose = document.querySelector('.search-close');
    // function changeClass() {
    //     searchbar.classList.add('search-visible');
    // }
    // function closesearch() {
    //     searchbar.classList.remove('search-visible');
    // }
    // sp.addEventListener('click', changeClass);
    // shclose.addEventListener('click', closesearch);
        

    this.commentsService.getComments().subscribe(response => this.commentsCount =  this.kFormatter(response.length))
    this.AlbumsService.getAlbums().subscribe(response => this.albumsCount =  this.kFormatter(response.length))
    this.PhotosService.getPhotos().subscribe(response => this.photosCount =  this.kFormatter(response.length))
 
  }

  kFormatter(num) {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : num
}

}
