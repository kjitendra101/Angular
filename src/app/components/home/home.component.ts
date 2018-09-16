import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
declare var $: any, jquiry: any, jQuiry: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postsList: Array<object>
  constructor(private posts: PostsService) {
    this.postsList = [];
  }

  ngOnInit() {

    this.posts.getPosts().subscribe(response => {this.postsList = response;})
  }
}
