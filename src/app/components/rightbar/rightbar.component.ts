import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent implements OnInit {
  userId:number
  id:number
  title:string
  body:string
  isPostSaved:boolean


  constructor(private user:UsersService) {
    this.restoreDefault();
    this.isPostSaved=false;
  }

  formSubmit(){
    if(this.title!="" && this.body!=""){
      this.user.addUser({
        "userId": this.userId,
        "id": this.id,
        "title": this.title,
        "body": this.body
    }).subscribe(data=>{
      document.getElementById("closeModal").click();
      this.restoreDefault();
      this.isPostSaved=true;
      
      setTimeout(() => {
        this.isPostSaved=false;
      }, 3000);
    })
    }
  }

  restoreDefault(){
    this.userId = 4;
    this.id=200;
    this.title="";
    this.body="";
  }



  ngOnInit() {
  }
  

}
