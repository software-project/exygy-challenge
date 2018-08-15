import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';
import { NotificationService } from '../../notifications/notification.service';
import { Notification } from '../../notifications/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private usersService: UsersService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
  }

  onSubmit() {
      this.usersService.signIn(this.user).subscribe(
          response => {
              this.router.navigate(['/profile']);
              this.notificationService.notify(new Notification('success', 'Sign in successful.'));
          },
          (error) => this.notificationService.notify(new Notification('error', error.message))
      );
  }
}
