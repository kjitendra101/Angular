
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
declare var $: any, jquiry: any, jQuiry: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  specificList: Array<object>
  constructor(private specific: PostsService) {
    this.specificList = [];
  }

  ngOnInit() {
    this.specific.getSpecific().subscribe(response => {this.specificList = response;})
  }

}