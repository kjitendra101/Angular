import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TodosService } from '../../services/todos.service';

declare var $: any, jquiry: any, jQuiry: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usersList: Array<object>
  todosList: Array<object>

  constructor(private users: UsersService, private todos: TodosService) {
    this.usersList = [];
    this.todosList = [];
  }

  ngOnInit() {
   
    this.users.getUsers().subscribe(response => {this.usersList = response;})
    this.todos.getTodos().subscribe(response => {this.todosList = response;})
  }
  

}
