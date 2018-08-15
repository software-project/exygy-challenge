import { Component, OnDestroy } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnDestroy {
  notifications: Notification[] = [];
  private subscription: Subscription;

  constructor( private notificationService: NotificationService) {
    this.subscription = this.notificationService.getNotifications()
        .subscribe( (notification) => {
          this.notifications.push(notification);
          setTimeout(() => { this.notifications.splice(this.notifications.indexOf(notification), 1); }, 5000);
        },
        (error) => console.log(error));
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
