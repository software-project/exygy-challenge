import {Observable} from 'rxjs/index';

declare function require(path: string);
import { Component, OnInit } from '@angular/core';
import { User } from './users/user';
import { UsersService } from './users/users.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: User;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    $(document).foundation();
    this.currentUser = this.usersService.getCurrentUser();
  }
}
